import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";
import { wrongSchemaError } from "../utils/errorUtils.js";

export default function validateSchema(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw wrongSchemaError(error.details[0].message);
    }

    next();
  };
}
