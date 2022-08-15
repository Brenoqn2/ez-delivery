import joi from "joi";

const register = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  phone: joi.string().required(),
  address: joi.string().required(),
});

const customersSchema = { register };
export default customersSchema;
