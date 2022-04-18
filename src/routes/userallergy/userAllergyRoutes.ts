import { Express, Router } from "express";

import { deleteUserAllergy, getUserAllergies } from "../../controllers";
import { createUserAllergy } from "../../controllers/userallergy/createUserAllergy";
import { updateUserAllergy } from "../../controllers/userallergy/updateUserAllergy";
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

  router.get("/allergies", validateAuthToken, getUserAllergies);

  router.patch("/allergy/:allergyId", validateAuthToken, updateUserAllergy);

  router.delete("/allergy/:allergyId", validateAuthToken, deleteUserAllergy);

  app.use("/user", router);
};

export { userAllergyRoute };
