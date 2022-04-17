import * as yup from "yup";

const diseaseShape = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  medication: yup.string(),
});

export { diseaseShape };
