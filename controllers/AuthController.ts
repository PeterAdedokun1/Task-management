import User from "../models/AuthModel";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { comparePassword, hashPassword } from "../utils/PasswordUtil";
import { UnauthenticatedError } from "../errors/CustomError";
import nodemailer from "nodemailer";

export const register = async (req: Request, res: Response) => {
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  const user = await User.create(req.body);
  res.status(StatusCodes.OK).json({ msg: "user created" });
};

export const login = async (req: Request, res: Response) => {
  const user = await User.findOne({ email: req.body.email });
  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));
  if (!isValidUser) {
    //  throw new UnauthenticatedError("invalid  credentials");
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: "bad request" });
  }
  res.status(StatusCodes.OK).json({ msg: "user logged in" });
};

const generateOTP = () => {
  return Math.floor(10000 + Math.random() * 90000).toString();
};
export const sendOtp = async (req: Request, res: Response) => {
  const { email } = req.body;
  const exisitingUser = await User.findOne({ email });
  if (!exisitingUser) {
    return res
      .status(404)
      .json({ error: "User not found with the provided email" });
  }
  // Generate OTP
  const otp = generateOTP();

  await User.updateOne({ email }, { $set: { otp } });
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "peteradedokun167@gmail.com",
      pass: "iddk avlp bhot lnil",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const mailOptions = {
    from: "peteradedokun167@gmail.com",
    to: email,
    subject: "OTP CODE FOR Peter's Task management app",
    text: `Your OTP code is: ${otp}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email", error);
      res.status(500).json({ error: "Failed to send OTP email." });
    } else {
      console.log("Email sent:", info.response);
      res.json({ message: "OTP sent successfully." });
    }
  });
};

export const verifyOtp = async (req: Request, res: Response) => {
  const { email, otp } = req.body;
  const user = await User.findOne({ otp });
  if (!user) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "invalid otp code " });
  }
 
  res.status(StatusCodes.OK).json({ msg: "successfull" });
};
