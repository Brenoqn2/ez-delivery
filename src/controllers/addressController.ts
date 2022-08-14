import { Request, Response } from "express";
import addressService from "../services/addressService.js";
import { EstablishmentsAddresses } from "@prisma/client";

export async function registerAddress(req: Request, res: Response) {
  const { address, userId }: EstablishmentsAddresses = req.body;
  await addressService.registerEstablishmentAddress(address, userId);
  res.sendStatus(201);
}

const addressController = { registerAddress };
export default addressController;
