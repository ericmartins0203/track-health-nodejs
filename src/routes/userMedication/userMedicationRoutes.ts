import { Express, Router } from "express";

import { validateAuthToken } from "../../middlewares";

const userMedicationRoute = (app: Express) => {
  const route = Router();

  route.post("/medication", validateAuthToken, (req, res) =>
    res.json({ message: "its running ok" })
  );

  route.get("/medications", validateAuthToken, (req, res) =>
    res.json({ message: "its running ok" })
  );

  route.patch("/medication/:id", validateAuthToken, (req, res) =>
    res.json({ message: "its running ok" })
  );

  route.delete("/medication/:id", validateAuthToken, (req, res) =>
    res.json({ message: "its running ok" })
  );

  app.use("/user", route);
};

export { userMedicationRoute };
