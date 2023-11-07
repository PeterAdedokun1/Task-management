import User from "../models/AuthModel";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { comparePassword, hashPassword } from "../utils/PasswordUtil";
import { UnauthenticatedError } from "../errors/CustomError";

export const register = async (req: Request, res: Response) => {
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  const user = await User.create(req.body);
  res.status(StatusCodes.OK).json({ msg: "user created" });
};

export const login = async (req: Request, res: Response) => {
  const user = await User.findOne({ email: req.body.email });
  const isValidUser = user && (await comparePassword(req.body.password, user.password));
  if (!isValidUser) {
    //  throw new UnauthenticatedError("invalid  credentials");
    return res.status(StatusCodes.BAD_GATEWAY).json({msg: "bad request"})
  }
  res.status(StatusCodes.OK).json({ msg: "user logged in" });
};
