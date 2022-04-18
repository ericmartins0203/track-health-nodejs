import * as yup from "yup";

const appontmentShape = yup.object().shape({
  id: yup.string().strict().trim(),
  date: yup.date().strict().required(),
  description: yup.string().trim().strict(),
  //   doctor: yup.object().shape({
  //     id: yup.string().strict().trim(),
  //     name: yup.string().trim().strict().required(),
  //     type: yup.string().trim().strict().required(),
  //     email: yup.string().trim().strict().required(),
  //     phone: yup.string().trim().strict(),
  //   }),
  //   user: yup.object().shape({
  //     id: yup.string().strict().trim(),
  //     name: yup.string().trim().strict().required(),
  //     email: yup.string().trim().strict().required(),
  //     phone: yup.string().trim().strict(),
  //   }),
});

export { appontmentShape };
