import { Express, Router } from "express";

import {
  allAppointmentsController,
  createAppointmentController,
  deleteAppointmentController,
  updateAppointmentController,
} from "../../controllers";
import { validateAuthToken, validateShape } from "../../middlewares";
import { appointmentShape, updateAppointmentShape } from "../../shapes";

const appointmentRoute = (app: Express) => {
  const appointmentRoute = Router();
  appointmentRoute.post(
    "",
    validateAuthToken,
    validateShape(appointmentShape),
    createAppointmentController
  );
  appointmentRoute.get("", validateAuthToken, allAppointmentsController);

  appointmentRoute.patch(
    "/:id",
    validateAuthToken,
    validateShape(updateAppointmentShape),
    updateAppointmentController
  );
  appointmentRoute.delete(
    "/:id",
    validateAuthToken,
    deleteAppointmentController
  );

  app.use("/appointment", appointmentRoute);
};

export { appointmentRoute };
