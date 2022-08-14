import prisma from "../database.js";

async function register(
  name: string,
  email: string,
  phone: string,
  userId: number
) {
  await prisma.deliverers.create({
    data: {
      name,
      email,
      phone,
      userId,
    },
  });
}

async function getDelivererByEmail(email: string) {
  const deliverer = await prisma.deliverers.findMany({
    where: {
      email,
    },
  });
  return deliverer;
}

async function getDelivererByPhone(phone: string) {
  const deliverer = await prisma.deliverers.findMany({
    where: {
      phone,
    },
  });
  return deliverer;
}

const deliverersRepository = {
  register,
  getDelivererByEmail,
  getDelivererByPhone,
};
export default deliverersRepository;
