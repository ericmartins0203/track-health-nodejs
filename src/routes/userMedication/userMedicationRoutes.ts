import { Express, Router } from "express";

import {
  createUserMedicationController,
  getUserMedicationsController,
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

  route.patch("/medication/:id", validateAuthToken, (req, res) =>
    res.json({ message: "its running ok" })
  );

  route.delete("/medication/:id", validateAuthToken, (req, res) =>
    res.json({ message: "its running ok" })
  );

  app.use("/user", route);
};

export { userMedicationRoute };
