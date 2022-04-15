import { hashSync } from "bcrypt";
import moment from "moment";
import * as yup from "yup";

const createUserShape = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .transform((pwd) => hashSync(pwd, 10))
    .required(),
  birthDate: yup
    .date()
    .transform((value, originalValue, context) => {
      if (context.isType(value)) return value;

      const valueFormated = moment(originalValue, "dd/MM/yyyy");

      return valueFormated.isValid() ? valueFormated.toDate() : new Date("");
    })
    .required(),
  gender: yup.string(),
  sex: yup.string(),
});

export { createUserShape };
