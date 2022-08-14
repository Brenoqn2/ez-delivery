import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { unauthorizedError } from "../utils/errorUtils";

export default function validateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  if (!authorization) {
    throw unauthorizedError("JWT not provided");
  }

  const token = authorization.split(" ")[1];
  if (!token) {
    throw unauthorizedError("Wrong jwt format");
  }

  const id = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      throw unauthorizedError("Invalid jwt");
    }
    return decoded;
  });
  req.body.id = id;

  next();
}
