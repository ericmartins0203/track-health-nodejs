import { Express } from "express";

import { loginRoute } from "./login/loginRoute";
import { userRoute } from "./user/userRoute";
import { vaccineRoute } from "./vaccine/vaccineRoute";

const routes = (app: Express) => {
  userRoute(app);
  loginRoute(app);
  vaccineRoute(app);
};

export { routes };
