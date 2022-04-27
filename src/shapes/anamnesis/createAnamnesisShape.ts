import * as yup from "yup";

const createAnamnesisShape = yup.object().shape({
  diseases: yup.boolean().strict().required(),
  allergy: yup.boolean().strict().required(),
  continuousMedication: yup.boolean().strict().required(),
  surgery: yup.boolean().strict().required(),
  alcoholic: yup.boolean().strict().required(),
  drugUser: yup.boolean().strict().required(),
  smoker: yup.boolean().strict().required(),
  physicalActivity: yup.boolean().strict().required(),
  diabetes: yup.boolean().strict().required(),
  hipertension: yup.boolean().strict().required(),
});

export { createAnamnesisShape };
