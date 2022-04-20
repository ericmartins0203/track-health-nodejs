import { Express, Router } from "express";

import {
  createUserController,
  getUserController,
  updateUserController,
} from "../../controllers";
import { validateAuthToken, validateShape } from "../../middlewares";
import {
  createUserShape,
  createVaccineShape,
  updateUserShape,
} from "../../shapes";

const userRoute = (app: Express) => {
  const userRoute = Router();
  userRoute.post(
    "/register",
    validateShape(createUserShape),
    createUserController
  );

  userRoute.get("", validateAuthToken, getUserController);

  userRoute.patch(
    "",
    validateAuthToken,
    validateShape(updateUserShape),
    updateUserController
  );

  userRoute.post(
    "/auth",
    validateShape(updateUserShape),
    validateAuthToken,
    (req, res) => {
      return res.json({ message: "Token validado" });
    }
  );

  app.use("/user", userRoute);
};

export { userRoute };
