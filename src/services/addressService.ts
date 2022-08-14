import addressRepository from "../repositories/addressRepository.js";
import { conflictError } from "../utils/errorUtils.js";

async function registerEstablishmentAddress(address: string, userId: number) {
  const alreadyRegisteredAddress =
    await addressRepository.getEstablishmentByAddress(address);
  if (alreadyRegisteredAddress.length > 0) {
    throw conflictError("Address already registered");
  }

  const alreadyRegisteredUser =
    await addressRepository.getEstablishmentByUserId(userId);

  if (alreadyRegisteredUser.length > 0) {
    throw conflictError("User already has an establishment registered");
  }

  await addressRepository.registerEstablishmentAddress(address, userId);
}

const addressService = { registerEstablishmentAddress };
export default addressService;
