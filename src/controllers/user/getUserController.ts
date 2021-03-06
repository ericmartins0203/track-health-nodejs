import { Request, Response } from "express";

import { getUserService } from "../../services";

const getUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    const { email } = request.decoded;
    const user = await getUserService(email);
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

export { getUserController };
