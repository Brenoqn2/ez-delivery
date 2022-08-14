import { Request, Response } from "express";
import deliverersService from "../services/deliverersService.js";
import { Deliverers } from "@prisma/client";

async function registerDeliverer(req: Request, res: Response) {
  const { name, email, phone, userId }: Deliverers = req.body;
  await deliverersService.registerDeliverer({ name, email, phone, userId });
  res.sendStatus(201);
}

const deliverersController = { registerDeliverer };
export default deliverersController;
