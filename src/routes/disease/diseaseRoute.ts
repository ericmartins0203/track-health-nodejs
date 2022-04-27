import { Express, Router } from "express";

import {
  allDiseasesController,
  createDiseaseController,
  createNewDiseaseController,
  deleteDiseaseController,
  deleteUserDiseaseController,
  getUserDiseaseController,
  updateUserDiseaseController,
} from "../../controllers";
import { validateAuthToken, validateShape } from "../../middlewares";
import { diseaseShape } from "../../shapes";

const diseaseRoute = (app: Express) => {
  const diseaseRoute = Router();
  diseaseRoute.get("/disease", validateAuthToken, allDiseasesController);
  diseaseRoute.post(
    "/disease",
    validateAuthToken,
    validateShape(diseaseShape),
    createNewDiseaseController
  );
  diseaseRoute.delete(
    "/disease/:id",
    validateAuthToken,
    deleteDiseaseController
  );

  diseaseRoute.get(
    "/user/disease",
    validateAuthToken,
    getUserDiseaseController
  );
  diseaseRoute.post(
    "/user/disease",
    validateAuthToken,
    validateShape(diseaseShape),
    createDiseaseController
  );
  diseaseRoute.patch(
    "/user/disease/:id",
    validateAuthToken,
    updateUserDiseaseController
  );
  diseaseRoute.delete(
    "/user/disease/:id",
    validateAuthToken,
    deleteUserDiseaseController
  );

  app.use("", diseaseRoute);
};

export { diseaseRoute };
