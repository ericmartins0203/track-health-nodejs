import { Express, Router } from "express";

import { getAllergies } from "../../controllers";
import { validateAuthToken } from "../../middlewares";

const AllergyRoute = (app: Express) => {
  const router = Router();

  router.get("", validateAuthToken, getAllergies);

  app.use("/allergies", router);
};

export { AllergyRoute };
