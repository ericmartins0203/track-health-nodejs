import { Request, Response } from "express";

import { CreateUserService } from "../../services";

const CrateUserController = async (request: Request, response: Response) => {
  try {
    const userData = request.body;
    const user = await CreateUserService(userData);
    return response.json(user);
  } catch (error) {
    return response.status(400).json({
      message: error.message || "Unexpected error.",
    });
  }
};

export { CrateUserController };
