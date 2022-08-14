import joi from "joi";

const registerSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  phone: joi.string().required(),
});

const deliverersSchema = { registerSchema };
export default deliverersSchema;
