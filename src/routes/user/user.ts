import { Express, Router } from "express";

import { crateUserController, getUserController } from "../../controllers";
import { validateShape } from "../../middlewares";
import { createUserShape } from "../../shapes";

const userRoute = (app: Express) => {
  const userRoute = Router();
  userRoute.post(
    "/register",
    validateShape(createUserShape),
    crateUserController
  );
  userRoute.post("", getUserController);

  app.use("/user", userRoute);
};

export { userRoute };
