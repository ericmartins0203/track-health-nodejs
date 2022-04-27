import { Request, Response, NextFunction } from "express";
import multer from "multer";

import { multerConfigs } from "../../configs/multer";

const multerValidate =
  (folder = "imageProfile") =>
  async (req: Request, res: Response, next: NextFunction) => {
    const upload = multer(multerConfigs(folder)).single("file");

    upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }

      return next();
    });
  };

export { multerValidate };
