import { Express, Router } from "express";

import { createUserController, getUserController } from "../../controllers";
import { validateAuthToken, validateShape } from "../../middlewares";
import { createUserShape } from "../../shapes";

const userRoute = (app: Express) => {
  const userRoute = Router();
  userRoute.post(
    "/register",
    validateShape(createUserShape),
    createUserController
  );

  userRoute.get("", validateAuthToken, getUserController);

  userRoute.post("/auth", validateAuthToken, (req, res) => {
    return res.json({ message: "Token validado" });
  });

  app.use("/user", userRoute);
};

export { userRoute };
