import * as yup from "yup";

const createUserMedicationShape = yup.object().shape({
  id: yup.string().strict().trim(),
  name: yup.string().trim().strict().required(),
  description: yup.string().trim().strict(),
});

export { createUserMedicationShape };
