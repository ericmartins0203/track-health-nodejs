import { Express, Router } from "express";

import {
  createVaccineController,
  deleteVaccineController,
  updateVaccineController,
} from "../../controllers";
import { getUserVaccineController } from "../../controllers/vaccine/getUserVaccineController";
import { validateAuthToken, validateShape } from "../../middlewares";
import { createVaccineShape } from "../../shapes";

const vaccineRoute = (app: Express) => {
  const vaccineRoute = Router();

  vaccineRoute.post(
    "/vaccine",
    validateShape(createVaccineShape),
    validateAuthToken,
    createVaccineController
  );

  vaccineRoute.get("/vaccine", validateAuthToken, getUserVaccineController);

  vaccineRoute.patch(
    "/vaccine/:vaccineId",
    validateAuthToken,
    updateVaccineController
  );

  vaccineRoute.delete(
    "/vaccine/:vaccineId",
    validateAuthToken,
    deleteVaccineController
  );
  app.use("/user", vaccineRoute);
};

export { vaccineRoute };
