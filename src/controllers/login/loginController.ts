import { Request, Response } from "express";

import { IUserInterface } from "../../repositories/user/InterfaceUserRepository";
import { loginServices } from "../../services/login/loginServices";

const loginController = async (
  req: Request,
  res: Response
): Promise<Response<Record<string, any>>> => {
  try {
    const { email, password } = req.validate as IUserInterface;
    const token = await loginServices(email, password);
    return res.json({ token });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    return res.status(500).json({ Error: "Unexpected error." });
  }
};

export { loginController };
