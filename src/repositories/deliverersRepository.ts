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

async function getAvailableDeliverers(userId: number) {
  const deliverers = await prisma.deliverers.findMany({
    where: {
      userId,
      available: true,
    },
  });
  return deliverers;
}

async function setDelivererNotAvailable(id: number) {
  await prisma.deliverers.update({
    where: {
      id,
    },
    data: {
      available: false,
    },
  });
}

async function setDelivererAvailable(id: number) {
  await prisma.deliverers.update({
    where: {
      id,
    },
    data: {
      available: true,
    },
  });
}

const deliverersRepository = {
  register,
  getDelivererByEmail,
  getDelivererByPhone,
  getAvailableDeliverers,
  setDelivererNotAvailable,
  setDelivererAvailable,
};
export default deliverersRepository;
