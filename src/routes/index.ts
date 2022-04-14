import { Express } from "express";

import { userRoute } from "./user/user";

const routes = (app: Express) => {
  userRoute(app);
};

export { routes };
