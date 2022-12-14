import deliverersRepository from "../repositories/deliverersRepository.js";
import { conflictError } from "../utils/errorUtils.js";
import { Deliverers } from "@prisma/client";
type newDeliverer = Omit<
  Deliverers,
  "id" | "createdAt" | "updatedAt" | "available"
>;

async function registerDeliverer(deliverer: newDeliverer) {
  const alreadyRegisteredEmail = await deliverersRepository.getDelivererByEmail(
    deliverer.email
  );
  if (alreadyRegisteredEmail.length > 0) {
    throw conflictError("Email already registered");
  }

  const alreadyRegisteredPhone = await deliverersRepository.getDelivererByPhone(
    deliverer.phone
  );
  if (alreadyRegisteredPhone.length > 0) {
    throw conflictError("Phone already registered");
  }

  await deliverersRepository.register(
    deliverer.name,
    deliverer.email,
    deliverer.phone,
    deliverer.userId
  );
}

async function getAvailableDeliverers(userId: number) {
  const deliverers = await deliverersRepository.getAvailableDeliverers(userId);
  return deliverers;
}

async function setDelivererNotAvailable(id: number) {
  await deliverersRepository.setDelivererNotAvailable(id);
}

const deliverersService = {
  registerDeliverer,
  getAvailableDeliverers,
  setDelivererNotAvailable,
};
export default deliverersService;
