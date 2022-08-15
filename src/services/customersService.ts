import customersRepository from "../repositories/customersRepository.js";
import { conflictError } from "../utils/errorUtils.js";

async function register(
  name: string,
  email: string,
  phone: string,
  address: string,
  userId: number
) {
  const alreadyRegistered = await customersRepository.getCustomerByPhone(phone);
  if (alreadyRegistered) {
    throw conflictError("Customer already registered");
  }

  await customersRepository.register(name, email, phone, address, userId);
}

const customersService = { register };
export default customersService;
