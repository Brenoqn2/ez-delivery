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

async function getEstablishmentCustomers(userId: number) {
  const customers = await customersRepository.getEstablishmentCustomers(userId);
  return customers;
}

const customersService = { register, getEstablishmentCustomers };
export default customersService;
