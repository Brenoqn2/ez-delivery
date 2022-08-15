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

const ordersRepository = { register };
export default ordersRepository;
