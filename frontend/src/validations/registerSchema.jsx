import * as yup from 'yup';

export const registerSchema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
    rpassword: yup.string().required(),
    confirmTerm: yup.boolean().required()
  })
  .required();
