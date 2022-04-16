import { hashSync } from "bcrypt";
import moment from "moment";
import * as yup from "yup";

const updateUserShape = yup.object().shape({
  name: yup.string().strict(),
  email: yup.string().email().strict(),
  password: yup.string().transform((pwd) => hashSync(pwd, 10)),
  birthDate: yup.date().transform((value, originalValue, context) => {
    if (context.isType(value)) return value;

    const valueFormated = moment(originalValue, "dd/MM/yyyy");

    return valueFormated.isValid() ? valueFormated.toDate() : new Date("");
  }),
  gender: yup.string().strict(),
  sex: yup.string().strict(),
});

export { updateUserShape };
