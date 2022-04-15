import { Request, Response } from "express";

import { CreateUserService } from "../../services";

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    const userData = request.validate;
    const user = await CreateUserService(userData);
    return response.json(user);
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
