import { Express } from "express";

import { AllergyRoute } from "./allergies/allergyRoute";
import { anamnesisRoute } from "./anamnesis/anamnesisRote";
import { diseaseRoute } from "./disease/diseaseRoute";
import { loginRoute } from "./login/loginRoute";
import { medicationsRoute } from "./medications/medicationRoute";
import { profileImageRoute } from "./profileImage/profileImageRoute";
import { userRoute } from "./user/userRoute";
import { userAllergyRoute } from "./userallergy/userAllergyRoutes";
import { userMedicationRoute } from "./userMedication/userMedicationRoutes";
import { vaccineRoute } from "./vaccine/vaccineRoute";

const routes = (app: Express) => {
  userRoute(app);
  loginRoute(app);
  userAllergyRoute(app);
  AllergyRoute(app);
  diseaseRoute(app);
  userMedicationRoute(app);
  medicationsRoute(app);
  vaccineRoute(app);
  anamnesisRoute(app);
  profileImageRoute(app);
};

export { routes };
