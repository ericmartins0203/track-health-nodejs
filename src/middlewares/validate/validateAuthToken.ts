import { Request, Response, NextFunction } from "express";
import jsonwebtoken, { JwtPayload } from "jsonwebtoken";

import config from "../../configs/config";

// eslint-disable-next-line consistent-return
const validateAuthToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  jsonwebtoken.verify(token, config.secret, (e, decoded) => {
    if (e) {
      return res.status(401).json({ error: e.message });
    }

    const { userId } = decoded as JwtPayload;

    req.userId = userId;

    return next();
  });
};

export default validateAuthToken;
