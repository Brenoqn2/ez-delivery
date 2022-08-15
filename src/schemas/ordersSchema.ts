import joi from "joi";

const register = joi.object({
  customerId: joi.number().required(),
  delivererId: joi.number().required(),
  description: joi.string().required(),
  total: joi.number().required(),
});

const ordersSchema = { register };
export default ordersSchema;
