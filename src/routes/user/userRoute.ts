import { Express, Router } from "express";

import { CrateUserController } from "../../controllers";
import { validateAuthToken, validateShape } from "../../middlewares";
import { createUserShape } from "../../shapes";

const userRoute = (app: Express) => {
  const userRoute = Router();
  userRoute.post(
    "/register",
    validateShape(createUserShape),
    CrateUserController
  );

  userRoute.post("/auth", validateAuthToken, (req, res) => {
    return res.json({ message: "Token validado" });
  });

  app.use("/user", userRoute);
};

export { userRoute };
