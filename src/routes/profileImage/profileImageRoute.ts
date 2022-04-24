import { Express, Router } from "express";
import multer from "multer";

import { multerConfigs } from "../../configs/multer";
import { createProfileImageController } from "../../controllers";
import { validateAuthToken } from "../../middlewares";

const profileImageRoute = (app: Express) => {
  const route = Router();

  route.post(
    "/profileImage",
    validateAuthToken,
    multer(multerConfigs("imageProfile")).single("file"),
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
