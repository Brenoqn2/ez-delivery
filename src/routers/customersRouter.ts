import { Router } from "express";
import customersController from "../controllers/customersController.js";
import validateSchema from "../middlewares/validateSchema.js";
import customersSchema from "../schemas/customersSchema.js";
import validateToken from "../middlewares/validateToken.js";

const customersRouter = Router();
customersRouter.post(
  "",
  validateSchema(customersSchema.register),
  validateToken,
  customersController.register
);
customersRouter.get(
  "",
  validateToken,
  customersController.getEstablishmentCustomers
);

customersRouter.get(
  "/:id",
  validateToken,
  customersController.getCustomerAddresById
);
export default customersRouter;
