import ordersService from "../services/ordersService.js";
import { Request, Response } from "express";

async function register(req: Request, res: Response) {
  const { customerId, delivererId, userId, description, total } = req.body;
  const order = await ordersService.register(
    customerId,
    delivererId,
    userId,
    description,
    parseFloat(total)
  );

  return res.send(order);
}

async function getEstablishmentOrders(req: Request, res: Response) {
  const { userId } = req.body;
  const orders = await ordersService.getEstablishmentOrders(userId);
  return res.send(orders);
}

const ordersController = { register, getEstablishmentOrders };
export default ordersController;
