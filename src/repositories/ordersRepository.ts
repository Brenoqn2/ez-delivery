import prisma from "../database.js";

async function register(
  customerId: number,
  delivererId: number,
  userId: number,
  description: string,
  total: number
) {
  const order = await prisma.orders.create({
    data: {
      customerId,
      delivererId,
      userId,
      description,
      total,
    },
  });

  return order;
}

async function getEstablishmentOrders(userId: number) {
  const orders = await prisma.orders.findMany({
    where: {
      userId,
      done: false,
    },
  });

  return orders;
}

const ordersRepository = { register, getEstablishmentOrders };
export default ordersRepository;
