import { Express, Router } from "express";

import { validateAuthToken } from "../../middlewares";

const anamnesisRoute = (app: Express) => {
  const route = Router();

  route.post("", validateAuthToken, (req, res) =>
    res.json({ message: "its running" })
  );

  route.get("", validateAuthToken, (req, res) =>
    res.json({ message: "its running" })
  );

  route.patch("", validateAuthToken, (req, res) =>
    res.json({ message: "its running" })
  );

  route.delete("", validateAuthToken, (req, res) =>
    res.json({ message: "its running" })
  );

  app.use("/anamnesis", route);
};

export { anamnesisRoute };
