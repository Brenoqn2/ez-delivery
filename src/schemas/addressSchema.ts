import joi from "joi";

const registerSchema = joi.object({
  address: joi.string().required(),
});

const addressSchema = { registerSchema };
export default addressSchema;
