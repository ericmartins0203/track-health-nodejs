import { Express } from "express";

import { addressRoute } from "./address/addressRoute";
import { AllergyRoute } from "./allergies/allergyRoute";
import { appointmentRoute } from "./appointments/appointmentRoute";
import { diseaseRoute } from "./disease/diseaseRoute";
import { doctorRoute } from "./doctor/doctorRoute";
import { loginRoute } from "./login/loginRoute";
import { userRoute } from "./user/userRoute";
import { userAllergyRoute } from "./userallergy/userAllergyRoutes";

const routes = (app: Express) => {
  addressRoute(app);
  AllergyRoute(app);
  appointmentRoute(app);
  diseaseRoute(app);
  doctorRoute(app);
  loginRoute(app);
  userRoute(app);
  userAllergyRoute(app);
};

export { routes };
