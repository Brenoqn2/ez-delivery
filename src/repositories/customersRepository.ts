import prisma from "../database.js";

async function register(
  name: string,
  email: string,
  phone: string,
  address: string,
  userId: number
) {
  const customer = await prisma.customers.create({
    data: {
      name,
      email,
      phone,
      userId,
    },
  });
  await prisma.customersAddresses.create({
    data: {
      address,
      customerId: customer.id,
    },
  });
}

async function getCustomerByPhone(phone: string) {
  const customer = await prisma.customers.findUnique({
    where: {
      phone,
    },
  });
  return customer;
}

async function getEstablishmentCustomers(userId: number) {
  const customers = await prisma.customers.findMany({
    where: {
      userId,
    },
  });
  return customers;
}

const customersRepository = {
  register,
  getCustomerByPhone,
  getEstablishmentCustomers,
};
export default customersRepository;
