import joi from "joi";

const registerSchema = joi.object({
  lat: joi.string().required(),
  lng: joi.string().required(),
});

const addressSchema = { registerSchema };
export default addressSchema;
