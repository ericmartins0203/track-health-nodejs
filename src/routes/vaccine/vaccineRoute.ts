import { Express, Router } from "express";

import { createVaccineController } from "../../controllers";
import { validateAuthToken, validateShape } from "../../middlewares";
import { createVaccineShape } from "../../shapes";

const vaccineRoute = (app: Express) => {
  const vaccineRoute = Router();

  vaccineRoute.post(
    "/vaccine",
    validateShape(createVaccineShape),
    validateAuthToken,
    createVaccineController
  );

  app.use("/user", vaccineRoute);
};

export { vaccineRoute };
