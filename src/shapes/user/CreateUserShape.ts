import { hashSync } from "bcrypt";
import * as yup from "yup";

const createUserShape = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .transform((pwd) => hashSync(pwd, 10))
    .required(),
  birthDate: yup.date().required(),
  gender: yup.string(),
  sex: yup.string(),
});

export { createUserShape };
