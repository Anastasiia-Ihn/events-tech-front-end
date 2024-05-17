import Joi from "joi";
// eslint-disable-next-line
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const enumHearUs = ["social media", "friends", "found myself"];

export const userValidation = Joi.object({
  fullName: Joi.string().min(3).max(50).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  birth: Joi.string(),
  hearUs: Joi.string().valid(...enumHearUs),
});
