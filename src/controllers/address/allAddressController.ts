import { Request, Response } from "express";

import { allAddressService } from "../../services";

const allAddressController = async (req: Request, res: Response) => {
  try {
    const address = await allAddressService();

    return res.status(200).json({
      message: "Successfully retrieved all addresses",
      data: address,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    return res.status(500).json({
      message: "Unexpected error",
    });
  }
};

export { allAddressController };
