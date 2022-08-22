import ordersRepository from "../repositories/ordersRepository.js";

async function register(
  customerId: number,
  delivererId: number,
  userId: number,
  description: string,
  total: number
) {
  const order = await ordersRepository.register(
    customerId,
    delivererId,
    userId,
    description,
    total
  );

  return order;
}

async function getEstablishmentOrders(userId: number) {
  const orders = await ordersRepository.getEstablishmentOrders(userId);
  return orders;
}

const ordersService = { register, getEstablishmentOrders };
export default ordersService;
