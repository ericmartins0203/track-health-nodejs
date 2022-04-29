import { Request, Response } from "express";

import { IUserInterface } from "../../repositories/user/InterfaceUserRepository";
import { CreateUserService } from "../../services";

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    const userData = request.validate as IUserInterface;
    const user = await CreateUserService(userData);
    return response.status(201).json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
    return response.status(500).json({ Error: "Unexpected error." });
  }
};

export { createUserController };
