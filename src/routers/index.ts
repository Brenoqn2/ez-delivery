import { Router } from "express";
import authRouter from "./authRouter.js";
import testsRouter from "./testsRouter.js";

const mainRouter = Router();
mainRouter.use(authRouter);

if (process.env.NODE_ENV === "test") {
  mainRouter.use("/test", testsRouter);
}

export default mainRouter;
