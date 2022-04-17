import { Express, Router } from "express";

import { getUserAllergies } from "../../controllers";
import { createUserAllergy } from "../../controllers/allergy/createUserAllergy";
import { validateAuthToken, validateShape } from "../../middlewares";
import { createUserAllergyShape } from "../../shapes";

const userAllergyRoute = (app: Express) => {
  const router = Router();

  router.post(
    "/allergy",
    validateAuthToken,
    validateShape(createUserAllergyShape),
    createUserAllergy
  );

  router.get("/allergy", validateAuthToken, getUserAllergies);

  app.use("/user", router);
};

export { userAllergyRoute };
