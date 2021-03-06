import { Express, Router } from "express";

import {
  deleteAnamnesisController,
  getAnamnesisController,
  updateAnamnesisController,
} from "../../controllers";
import { createAnamnesisController } from "../../controllers/anamnesis/createAnamnesisController";
import { validateAuthToken, validateShape } from "../../middlewares";
import { createAnamnesisShape, updateAnamnesisShape } from "../../shapes";

const anamnesisRoute = (app: Express) => {
  const route = Router();

  route.post(
    "/anamnesis",
    validateAuthToken,
    validateShape(createAnamnesisShape),
    createAnamnesisController
  );

  route.get("/anamnesis", validateAuthToken, getAnamnesisController);

  route.patch(
    "/anamnesis",
    validateAuthToken,
    validateShape(updateAnamnesisShape),
    updateAnamnesisController
  );

  route.delete("/anamnesis", validateAuthToken, deleteAnamnesisController);

  app.use("/user", route);
};

export { anamnesisRoute };
