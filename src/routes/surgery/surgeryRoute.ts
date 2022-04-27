import { Express, Router } from "express";

import { createSurgeryController } from "../../controllers/surgery/createSurgeryController";
import { deleteSurgeryController } from "../../controllers/surgery/deleteSurgeryController";
import { getUserSurgeryController } from "../../controllers/surgery/getUserSurgeryController";
import { updateSurgeryController } from "../../controllers/surgery/updateSurgeryController";
import { validateAuthToken, validateShape } from "../../middlewares";
import { surgeryShape } from "../../shapes";

const surgeryRoute = (app: Express) => {
  const surgeryRoute = Router();

  surgeryRoute.post(
    "/surgery",
    validateShape(surgeryShape),
    validateAuthToken,
    createSurgeryController
  );

  surgeryRoute.get("/surgery", validateAuthToken, getUserSurgeryController);

  surgeryRoute.patch(
    "/surgery/:surgeryId",
    validateAuthToken,
    updateSurgeryController
  );

  surgeryRoute.delete(
    "/surgery/:surgeryId",
    validateAuthToken,
    deleteSurgeryController
  );
  app.use("/user", surgeryRoute);
};

export { surgeryRoute };
