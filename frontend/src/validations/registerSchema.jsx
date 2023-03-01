import * as yup from 'yup';

export const registerSchema = yup
  .object({
    surname: yup.string().required(),
    lastname: yup.string().required(),
    phoneOrEmail: yup.string().required(),
    password: yup.string().required(),
    day: yup.string().required(),
    month: yup.string().required(),
    year: yup.string().required(),
    gender: yup.string().required()
  })
  .required();
