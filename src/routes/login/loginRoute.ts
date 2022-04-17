import { Express, Router } from "express";

import { loginController } from "../../controllers";
import { validateShape } from "../../middlewares";
import { loginUserShape } from "../../shapes";

const loginRoute = (app: Express) => {
  const loginRoute = Router();
  loginRoute.post("/login", validateShape(loginUserShape), loginController);

  app.use("", loginRoute);
};

export { loginRoute };
