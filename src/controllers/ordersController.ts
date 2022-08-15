import ordersService from "../services/ordersService.js";
import { Request, Response } from "express";

async function register(req: Request, res: Response) {
  const { customerId, delivererId, userId, description, total } = req.body;
  const order = await ordersService.register(
    customerId,
    delivererId,
    userId,
    description,
    total
  );

  return res.send(order);
}

const ordersController = { register };
export default ordersController;
