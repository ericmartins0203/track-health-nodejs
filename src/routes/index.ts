import { Express } from "express";

import { loginRoute } from "./login/loginRoute";
import { userRoute } from "./user/userRoute";

const routes = (app: Express) => {
  userRoute(app);
  loginRoute(app);
};

export { routes };
