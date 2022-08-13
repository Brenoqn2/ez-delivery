import cors from "cors";
import express from "express";
import "express-async-errors";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
import testsRouter from "./routers/testsRouter.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "test") {
  app.use(testsRouter);
}
app.use(errorHandlerMiddleware);

export default app;
