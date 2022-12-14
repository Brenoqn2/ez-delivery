import { Router } from "express";
import authRouter from "./authRouter.js";
import testsRouter from "./testsRouter.js";
import addressRouter from "./addressRouter.js";
import deliverersRouter from "./deliverersRouter.js";
import customersRouter from "./customersRouter.js";
import ordersRouter from "./ordersRouter.js";

const mainRouter = Router();
mainRouter.use(authRouter);
mainRouter.use("/address", addressRouter);
mainRouter.use("/deliverers", deliverersRouter);
mainRouter.use("/customers", customersRouter);
mainRouter.use("/orders", ordersRouter);

if (process.env.NODE_ENV === "test") {
  mainRouter.use("/test", testsRouter);
}

export default mainRouter;
