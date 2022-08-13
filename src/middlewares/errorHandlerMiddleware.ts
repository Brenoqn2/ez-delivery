import { NextFunction, Request, Response } from "express";
import { AppError, errorStatusCode, isAppError } from "../utils/errorUtils.js";

export default function errorHandlerMiddleware(
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (isAppError(err)) {
    return res.status(errorStatusCode(err.type)).send(err.message);
  }
  console.log(err);
  res.sendStatus(500);

  next(err);
}
