import { Express, Router } from "express";

import {
  createProfileImageController,
  deleteProfileImageController,
  getProfileImageController,
} from "../../controllers";
import { multerValidate, validateAuthToken } from "../../middlewares";

const profileImageRoute = (app: Express) => {
  const route = Router();

  route.post(
    "/profileImage",
    validateAuthToken,
    multerValidate("imageProfile"),
    createProfileImageController
  );

  route.get("/profileImage", validateAuthToken, getProfileImageController);

  route.delete(
    "/profileImage",
    validateAuthToken,
    deleteProfileImageController
  );

  app.use("/user", route);
};

export { profileImageRoute };
