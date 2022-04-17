import { Express, Router } from "express";

import {
  allDiseasesController,
  createDiseaseController,
} from "../../controllers";
import { validateAuthToken, validateShape } from "../../middlewares";
import { diseaseShape } from "../../shapes";

const diseaseRoute = (app: Express) => {
  const diseaseRoute = Router();
  diseaseRoute.get("/diseases", validateAuthToken, allDiseasesController);
  diseaseRoute.post(
    "/user/disease",
    validateAuthToken,
    validateShape(diseaseShape),
    createDiseaseController
  );

  app.use("", diseaseRoute);
};

export { diseaseRoute };
