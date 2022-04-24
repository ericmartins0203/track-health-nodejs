import { Express, Router } from "express";

import { createProfileImageController } from "../../controllers";
import { multerValidate, validateAuthToken } from "../../middlewares";

const profileImageRoute = (app: Express) => {
  const route = Router();

  route.post(
    "/profileImage",
    validateAuthToken,
    multerValidate("imageProfile"),
    createProfileImageController
  );

  route.get("/profileImage", validateAuthToken, (req, res) => {
    return res.json({ message: "its running." });
  });

  route.delete("/profileImage", validateAuthToken, (req, res) => {
    return res.json({ message: "its running." });
  });

  app.use("/user", route);
};

export { profileImageRoute };
