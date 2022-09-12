import joi from 'joi';
import { ICredentialBasic } from '../types/credentialTypes';

const credentialSchema = joi.object<ICredentialBasic>({
  title: joi.string().required(),
  url: joi.string().uri().required(),
  username: joi.string().required(),
  password: joi.string().min(10).required(),
});
  
export default credentialSchema;