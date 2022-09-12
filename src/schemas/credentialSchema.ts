import joi from 'joi';

const credentialSchema = joi.object({
  title: joi.string().required(),
  url: joi.string().uri().required(),
  username: joi.string().required(),
  password: joi.string().min(10).required(),
});
  
export default credentialSchema;