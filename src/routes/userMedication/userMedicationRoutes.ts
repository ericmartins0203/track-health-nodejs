import { Express, Router } from "express";

import {
  createUserMedicationController,
  deleteUserMedicationController,
  getUserMedicationsController,
  updateUserMedicationController,
} from "../../controllers";
import { validateAuthToken, validateShape } from "../../middlewares";
import { createUserMedicationShape } from "../../shapes";

const userMedicationRoute = (app: Express) => {
  const route = Router();

  route.post(
    "/medication",
    validateAuthToken,
    validateShape(createUserMedicationShape),
    createUserMedicationController
  );

  route.get("/medications", validateAuthToken, getUserMedicationsController);

  route.patch(
    "/medication/:id",
    validateAuthToken,
    updateUserMedicationController
  );

  route.delete(
    "/medication/:id",
    validateAuthToken,
    deleteUserMedicationController
  );

  app.use("/user", route);
};

export { userMedicationRoute };
