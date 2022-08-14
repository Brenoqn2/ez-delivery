import { Router } from "express";
import authRouter from "./authRouter.js";
import testsRouter from "./testsRouter.js";
import addressRouter from "./addressRouter.js";

const mainRouter = Router();
mainRouter.use(authRouter);
mainRouter.use("/address", addressRouter);

if (process.env.NODE_ENV === "test") {
  mainRouter.use("/test", testsRouter);
}

export default mainRouter;
