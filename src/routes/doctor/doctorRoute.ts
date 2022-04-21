import { Express, Router } from "express";

import {
  allDoctorController,
  createDoctorController,
  deleteDoctorController,
  updateDoctorController,
} from "../../controllers";
import { validateAuthToken, validateShape } from "../../middlewares";
import { doctorShape, updateDoctorShape } from "../../shapes";

const doctorRoute = (app: Express) => {
  const doctorRoute = Router();
  doctorRoute.post(
    "",
    validateAuthToken,
    validateShape(doctorShape),
    createDoctorController
  );

  doctorRoute.get("", validateAuthToken, allDoctorController);

  doctorRoute.patch(
    "/:id",
    validateAuthToken,
    validateShape(updateDoctorShape),
    updateDoctorController
  );

  doctorRoute.delete("/:id", validateAuthToken, deleteDoctorController);

  app.use("/doctor", doctorRoute);
};

export { doctorRoute };
