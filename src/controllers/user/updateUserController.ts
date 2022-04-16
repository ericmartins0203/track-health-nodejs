import { Request, Response } from "express";

import { updateUserService } from "../../services";

const updateUserController = async (request: Request, response: Response) => {
  try {
    const user = await updateUserService(
      request.validate,
      request.decoded.userId
    );
    return response.status(200).json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
    return response.status(500).json({ Error: "Unexpected error." });
  }
};
export { updateUserController };
