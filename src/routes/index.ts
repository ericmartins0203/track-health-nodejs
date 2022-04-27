import { Express } from "express";

import { addressRoute } from "./address/addressRoute";
import { AllergyRoute } from "./allergies/allergyRoute";
import { anamnesisRoute } from "./anamnesis/anamnesisRote";
import { appointmentRoute } from "./appointments/appointmentRoute";
import { diseaseRoute } from "./disease/diseaseRoute";
import { doctorRoute } from "./doctor/doctorRoute";
import { loginRoute } from "./login/loginRoute";
import { medicationsRoute } from "./medications/medicationRoute";
import { profileImageRoute } from "./profileImage/profileImageRoute";
import { surgeryRoute } from "./surgery/surgeryRoute";
import { userRoute } from "./user/userRoute";
import { userAllergyRoute } from "./userallergy/userAllergyRoutes";
import { userMedicationRoute } from "./userMedication/userMedicationRoutes";
import { vaccineRoute } from "./vaccine/vaccineRoute";

const routes = (app: Express) => {
  addressRoute(app);
  AllergyRoute(app);
  appointmentRoute(app);
  diseaseRoute(app);
  doctorRoute(app);
  loginRoute(app);
  userRoute(app);
  userAllergyRoute(app);
  userMedicationRoute(app);
  medicationsRoute(app);
  vaccineRoute(app);
  anamnesisRoute(app);
  profileImageRoute(app);
  surgeryRoute(app);
};

export { routes };
