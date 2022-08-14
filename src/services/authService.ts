import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js";
import jwt from "jsonwebtoken";
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../utils/errorUtils.js";

const saltRounds = 10;

async function register(email: string, password: string, name: string) {
  const alreadyRegistered = await authRepository.getUserByEmail(email);
  if (alreadyRegistered.length > 0) {
    throw conflictError("User already registered");
  }
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await authRepository.register(email, name, hashedPassword);
}

async function login(email: string, password: string) {
  const user = await authRepository.getUserByEmail(email);
  if (user.length === 0) {
    throw notFoundError("User not found");
  }
  const isPasswordValid = await bcrypt.compare(password, user[0].password);
  if (!isPasswordValid) {
    throw unauthorizedError("Invalid password");
  }
  const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
}

const authService = { register, login };
export default authService;
