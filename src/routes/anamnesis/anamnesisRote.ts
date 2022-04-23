import { Express, Router } from "express";
import { createAnamnesisController } from "../../controllers/anamnesis/createAnamnesisController";

import { validateAuthToken, validateShape } from "../../middlewares";
import { createAnamnesisShape } from "../../shapes";

const anamnesisRoute = (app: Express) => {
  const route = Router();

  route.post(
    "/anamnesis",
    validateAuthToken,
    validateShape(createAnamnesisShape),
    createAnamnesisController
  );

  route.get("/anamnesis", validateAuthToken, (req, res) =>
    res.json({ message: "its running" })
  );

  route.patch("/anamnesis", validateAuthToken, (req, res) =>
    res.json({ message: "its running" })
  );

  route.delete("/anamnesis", validateAuthToken, (req, res) =>
    res.json({ message: "its running" })
  );

  app.use("/user", route);
};

export { anamnesisRoute };
