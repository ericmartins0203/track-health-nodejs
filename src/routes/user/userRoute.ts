import { Express, Router } from "express";

import { CrateUserController } from "../../controllers";
import { validateShape } from "../../middlewares";
import { createUserShape } from "../../shapes";

const userRoute = (app: Express) => {
  const userRoute = Router();
  userRoute.post(
    "/register",
    validateShape(createUserShape),
    CrateUserController
  );

  app.use("/user", userRoute);
};

export { userRoute };
