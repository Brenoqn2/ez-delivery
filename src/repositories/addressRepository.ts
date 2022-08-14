import prisma from "../database.js";

async function registerEstablishmentAddress(address: string, userId: number) {
  await prisma.establishmentsAddresses.create({
    data: {
      address,
      userId,
    },
  });
}

async function getEstablishmentByAddress(address: string) {
  const establishment = await prisma.establishmentsAddresses.findMany({
    where: {
      address,
    },
  });
  return establishment;
}

async function getEstablishmentByUserId(userId: number) {
  const establishment = await prisma.establishmentsAddresses.findMany({
    where: {
      userId,
    },
  });
  return establishment;
}

const addressRepository = {
  registerEstablishmentAddress,
  getEstablishmentByAddress,
  getEstablishmentByUserId,
};
export default addressRepository;
