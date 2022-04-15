import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

const validateShape =
  (shape: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);

      req.validate = await shape.validate(req.body);
      console.log(req.validate);
      return next();
    } catch (error: any) {
      return res.status(400).json({ error: error.errors });
    }
  };

export { validateShape };
