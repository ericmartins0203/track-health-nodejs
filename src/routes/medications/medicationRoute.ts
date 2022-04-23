import { Express, Router } from "express";

import { getMedicationsController } from "../../controllers";
import { validateAuthToken } from "../../middlewares";

const medicationsRoute = (app: Express) => {
  const route = Router();

  route.get("", validateAuthToken, getMedicationsController);

  app.use("/medications", route);
};

export { medicationsRoute };
