import { NextFunction, Request, Response } from "express";
import { validationResult, ValidationError } from "express-validator";

const errorFormatter = ({ location, msg, param, value, nestedErrors }: ValidationError) => {
  return `${location}[${param}]: ${msg} ${value}`;
};

export const validationErrorHandler = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req).formatWith(errorFormatter);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
