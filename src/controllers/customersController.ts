import { Request, Response } from "express";
import customersService from "../services/customersService.js";

async function register(req: Request, res: Response) {
  const { name, email, phone, address, userId } = req.body;
  await customersService.register(name, email, phone, address, userId);
  res.sendStatus(201);
}

async function getEstablishmentCustomers(req: Request, res: Response) {
  const { userId } = req.body;
  const customers = await customersService.getEstablishmentCustomers(userId);
  res.send(customers);
}

async function getCustomerAddresById(req: Request, res: Response) {
  const { id } = req.params;
  const customerAddress = await customersService.getCustomerAddresById(
    Number(id)
  );
  res.send(customerAddress);
}

const customersController = {
  register,
  getEstablishmentCustomers,
  getCustomerAddresById,
};
export default customersController;
