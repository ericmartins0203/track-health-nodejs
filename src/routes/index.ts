import { Express } from "express";

import { diseaseRoute } from "./disease/diseaseRoute";
import { loginRoute } from "./login/loginRoute";
import { userRoute } from "./user/userRoute";

const routes = (app: Express) => {
  userRoute(app);
  loginRoute(app);
  diseaseRoute(app);
};

export { routes };
