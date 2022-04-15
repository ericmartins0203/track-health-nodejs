import * as yup from "yup";

const loginUserShape = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export { loginUserShape };
