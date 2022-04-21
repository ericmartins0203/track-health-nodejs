import { Express } from "express";

import { AllergyRoute } from "./allergies/allergyRoute";
import { diseaseRoute } from "./disease/diseaseRoute";
import { loginRoute } from "./login/loginRoute";
import { userRoute } from "./user/userRoute";
import { userAllergyRoute } from "./userallergy/userAllergyRoutes";
import { userMedicationRoute } from "./userMedication/userMedicationRoutes";

const routes = (app: Express) => {
  userRoute(app);
  loginRoute(app);
  userAllergyRoute(app);
  AllergyRoute(app);
  diseaseRoute(app);
  userMedicationRoute(app);
};

export { routes };
