import User from "../models/AuthModel";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { comparePassword, hashPassword } from "../utils/PasswordUtil";
import { UnauthenticatedError } from "../errors/CustomError";
import nodemailer from "nodemailer";
import { error, info } from "console";

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
    return res.status(StatusCodes.BAD_GATEWAY).json({ msg: "bad request" });
  }
  res.status(StatusCodes.OK).json({ msg: "user logged in" });
};

const generateOTP = () => {
  return Math.floor(10000 + Math.random() * 90000).toString();
};

export const sendOTP = async (req: Request, res: Response) => {
  const email = "peteradedokun167@gmail.com";
  const otp = generateOTP();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "peteradedokun167@gmail.com",
      pass: "peterade@2003",
    },
    tls: {
    rejectUnauthorized: false,
  },
  });
  //Email content
  const mailOptions = {
    from: "peteradedokun167@gmail.com",
    to: email,
    subject: "Your OTP Code",
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
