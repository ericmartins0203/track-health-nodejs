import moment from "moment";
import * as yup from "yup";

const appointmentShape = yup.object().shape({
  id: yup.string().strict().trim(),
  date: yup
    .date()
    .transform((value, originalValue, context) => {
      if (context.isType(value)) return value;

      const valueFormated = moment(originalValue, "dd/MM/yyyy");

      return valueFormated.isValid() ? valueFormated.toDate() : new Date("");
    })
    .required(),
  description: yup.string().trim().strict(),
  doctorId: yup.string().strict().trim().required(),
});

const updateAppointmentShape = yup.object().shape({
  date: yup.date().transform((value, originalValue, context) => {
    if (context.isType(value)) return value;

    const valueFormated = moment(originalValue, "dd/MM/yyyy");

    return valueFormated.isValid() ? valueFormated.toDate() : new Date("");
  }),
  description: yup.string().trim().strict(),
  doctorId: yup.string().strict().trim(),
});

export { appointmentShape, updateAppointmentShape };
