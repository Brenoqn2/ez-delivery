import { Request, Response } from "express";
import customersService from "../services/customersService.js";

async function register(req: Request, res: Response) {
  const { name, email, phone, address, userId } = req.body;
  await customersService.register(name, email, phone, address, userId);
  res.sendStatus(201);
}

const customersController = { register };
export default customersController;
