import { Express, Router } from "express";

import { createUserAllergy } from "../../controllers/allergy/createUserAllergy";
import { validateAuthToken } from "../../middlewares";

const userAllergyRoute = (app: Express) => {
  const router = Router();

  router.post("/allergy", validateAuthToken, createUserAllergy);

  // router.get("/allergies", validateAuthToken,)

  app.use("/user", router);
};

export { userAllergyRoute };
