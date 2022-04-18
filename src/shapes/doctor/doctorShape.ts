import * as yup from "yup";

const doctorShape = yup.object().shape({
  id: yup.string().strict().trim(),
  name: yup.string().trim().strict().required(),
  type: yup.string().trim().strict().required(),
  email: yup.string().trim().strict().required(),
  phone: yup.string().trim().strict(),
  sex: yup.string().trim().strict(),
});

export { doctorShape };
