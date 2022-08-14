import prisma from "../database.js";

async function getUserByEmail(email: string) {
  const user = await prisma.users.findMany({
    where: {
      email,
    },
  });
  return user;
}

async function register(email: string, name: string, password: string) {
  await prisma.users.create({
    data: {
      email,
      password,
      name,
    },
  });
}

const authRepository = { register, getUserByEmail };
export default authRepository;
