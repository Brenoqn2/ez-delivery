import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { unauthorizedError } from "../utils/errorUtils.js";

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

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded: any) => {
    if (err) {
      throw unauthorizedError("Invalid jwt");
    }
    req.body.userId = decoded.id;
  });

  next();
}
