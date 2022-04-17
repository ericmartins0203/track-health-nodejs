import { Express, Router } from "express";

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

  // router.get("/allergies", validateAuthToken,)

  app.use("/user", router);
};

export { userAllergyRoute };
