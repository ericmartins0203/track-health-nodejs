import { Request, Response } from "express";

import { CreateUserService } from "../../services";

const CrateUserController = (request: Request, response: Response) => {
  const userData = request.body;
  const user = CreateUserService(userData);
  return response.json(user);
};

export { CrateUserController };
