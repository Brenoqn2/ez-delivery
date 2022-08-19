import { Request, Response } from "express";
import deliverersService from "../services/deliverersService.js";
import { Deliverers } from "@prisma/client";

async function registerDeliverer(req: Request, res: Response) {
  const { name, email, phone, userId }: Deliverers = req.body;
  await deliverersService.registerDeliverer({ name, email, phone, userId });
  res.sendStatus(201);
}

async function getAvailableDeliverers(req: Request, res: Response) {
  const { userId } = req.body;
  const deliverers = await deliverersService.getAvailableDeliverers(userId);
  res.send(deliverers);
}

async function setDelivererNotAvailable(req: Request, res: Response) {
  const { id } = req.body;
  await deliverersService.setDelivererNotAvailable(id);
  res.sendStatus(200);
}

const deliverersController = {
  registerDeliverer,
  getAvailableDeliverers,
  setDelivererNotAvailable,
};
export default deliverersController;
