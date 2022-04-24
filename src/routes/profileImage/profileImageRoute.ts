import { Express, Router } from "express";

import { validateAuthToken } from "../../middlewares";

const profileImageRoute = (app: Express) => {
  const route = Router();

  route.post("/profileImage", validateAuthToken, (req, res) => {
    return res.json({ message: "its running." });
  });

  route.get("/profileImage", validateAuthToken, (req, res) => {
    return res.json({ message: "its running." });
  });

  route.delete("/profileImage", validateAuthToken, (req, res) => {
    return res.json({ message: "its running." });
  });

  app.use("/user", route);
};

export { profileImageRoute };
