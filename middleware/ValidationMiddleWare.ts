import { NextFunction, Request, Response } from "express";
import { body, validationResult, param } from "express-validator";
import mongoose from "mongoose";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../errors/CustomError";
import User from "../models/AuthModel";

type ValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

const withValidateErrors = (
  validateValues: any
): [ValidationMiddleware, ValidationMiddleware] => {
  const validationMiddleware: ValidationMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors.isEmpty());
    if (!errors.isEmpty()) {
      const errorMessages = errors
        .array()
        .map((error) => error.msg)
        .join(", ");
      if (errorMessages[0].startsWith("not authorized")) {
        throw new UnauthenticatedError("not authorized to access this route");
      }
      throw new BadRequestError(errorMessages);
    }
    next();
  };
  return [validateValues, validationMiddleware];
};

export const validateRegisterInput = withValidateErrors([
  body("userName").notEmpty().withMessage("Username is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("email already exists");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 6 })
    .withMessage("password must be atleast 6 character long "),
]);

export const validateLoginInput = withValidateErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
  body("password").notEmpty().withMessage("password is required"),
]);
export const validateSendOtp = withValidateErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
]);
