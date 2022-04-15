import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

const validateShape =
  (shape: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.validate = await shape.validate(req.body);
      return next();
    } catch (error) {
      return res.status(400).send("Invalid data");
    }
  };

export { validateShape };
