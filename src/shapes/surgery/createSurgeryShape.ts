import moment from "moment";
import * as yup from "yup";

const surgeryShape = yup.object().shape({
  name: yup.string().required(),
  date: yup
    .date()
    .transform((value, originalValue, context) => {
      if (context.isType(value)) return value;

      const valueFormated = moment(originalValue, "dd/MM/yyyy");

      return valueFormated.isValid() ? valueFormated.toDate() : new Date("");
    })
    .required(),
  description: yup.string(),
});

export { surgeryShape };
