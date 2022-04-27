import * as yup from "yup";

const updateAnamnesisShape = yup.object().shape({
  diseases: yup.boolean().strict(),
  allergy: yup.boolean().strict(),
  continuousMedication: yup.boolean().strict(),
  surgery: yup.boolean().strict(),
  alcoholic: yup.boolean().strict(),
  drugUser: yup.boolean().strict(),
  smoker: yup.boolean().strict(),
  physicalActivity: yup.boolean().strict(),
  diabetes: yup.boolean().strict(),
  hipertension: yup.boolean().strict(),
});

export { updateAnamnesisShape };
