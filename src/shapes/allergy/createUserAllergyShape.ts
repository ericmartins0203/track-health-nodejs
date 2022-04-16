import * as yup from "yup";

import { titleCaseFunction } from "../../utils";

const createUserAllergy = yup.object().shape({
  userId: yup.string().trim().required(),
  description: yup.string().trim(),
  allergies: yup.object().shape({
    allergiesId: yup.string().trim(),
    name: yup
      .string()
      .trim()
      .transform((value) => titleCaseFunction(value)),
  }),
});

export default createUserAllergy;
