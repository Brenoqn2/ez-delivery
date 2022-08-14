import joi from "joi";

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

const registerSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  name: joi.string().required(),
});

const authSchema = { loginSchema, registerSchema };
export default authSchema;
