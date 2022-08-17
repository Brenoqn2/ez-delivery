import { Request, Response } from "express";
import addressService from "../services/addressService.js";
import { EstablishmentsAddresses } from "@prisma/client";

async function registerAddress(req: Request, res: Response) {
  const { address, userId }: EstablishmentsAddresses = req.body;
  await addressService.registerEstablishmentAddress(address, userId);
  res.sendStatus(201);
}

async function getAddress(req: Request, res: Response) {
  const { userId } = req.body;
  const address = await addressService.getEstablishmentByUserId(userId);
  res.send(address);
}

const addressController = { registerAddress, getAddress };
export default addressController;
