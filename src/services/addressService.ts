import addressRepository from "../repositories/addressRepository.js";
import { conflictError } from "../utils/errorUtils.js";

async function registerEstablishmentAddress(address: string, userId: number) {
  const alreadyRegisteredUser =
    await addressRepository.getEstablishmentByUserId(userId);

  if (alreadyRegisteredUser.length > 0) {
    throw conflictError("User already has an establishment registered");
  }

  await addressRepository.registerEstablishmentAddress(address, userId);
}

async function getEstablishmentByUserId(userId: number) {
  const establishment = await addressRepository.getEstablishmentByUserId(
    userId
  );
  return establishment;
}

const addressService = {
  registerEstablishmentAddress,
  getEstablishmentByUserId,
};
export default addressService;
