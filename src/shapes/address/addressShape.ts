import * as yup from "yup";

const addressShape = yup.object().shape({
  id: yup.string().strict().trim(),
  street: yup.string().trim().strict().required(),
  number: yup.number().strict().required(),
  district: yup.string().trim().strict().required(),
  city: yup.string().trim().strict().required(),
  complement: yup.string().trim().strict(),
});

const updateAddressShape = yup.object().shape({
  street: yup.string().trim().strict(),
  number: yup.number().strict(),
  district: yup.string().trim().strict(),
  city: yup.string().trim().strict(),
  complement: yup.string().trim().strict(),
});

export { addressShape, updateAddressShape };
