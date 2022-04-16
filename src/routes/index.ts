import { Express } from "express";
import { AllergyRoute } from "./allergies/allergyRoute";

import { userAllergyRoute } from "./allergies/userAllergyRoutes";
import { loginRoute } from "./login/loginRoute";
import { userRoute } from "./user/userRoute";

const routes = (app: Express) => {
  userRoute(app);
  loginRoute(app);
  userAllergyRoute(app);
  AllergyRoute(app);
};

export { routes };
