import { Express, Router } from "express";

import { validateAuthToken } from "../../middlewares";

const medicationsRoute = (app: Express) => {
  const route = Router();

  route.get("", validateAuthToken, (req, res) =>
    res.json({ message: "its running" })
  );

  app.use("/medications", route);
};

export { medicationsRoute };
