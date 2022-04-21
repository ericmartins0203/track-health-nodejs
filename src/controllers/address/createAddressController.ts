import { Request, Response } from "express";

import { IAddressInterface } from "../../repositories/address/interfaceAddressRepository";
import { createAddressService } from "../../services";

const createAddressController = async (req: Request, res: Response) => {
  try {
    const data = req.validate as IAddressInterface;

    const address = await createAddressService(data);

    return res.status(200).json({
      message: "Address created",
      address,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    return res.status(500).json({
      error: "Unexpected error.",
    });
  }
};

export { createAddressController };
