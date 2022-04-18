import * as yup from "yup";

const createUserAllergyShape = yup.object().shape({
  id: yup.string().strict().trim(),
  name: yup.string().trim().strict().required(),
  description: yup.string().trim().strict(),
});

export { createUserAllergyShape };
