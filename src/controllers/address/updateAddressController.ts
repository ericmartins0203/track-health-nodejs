import { Request, Response } from "express";

import { IAddressInterface } from "../../repositories/address/interfaceAddressRepository";
import { updateAddressService } from "../../services";

const updateAddressController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.validate as IAddressInterface;
    const address = await updateAddressService(id, data);
    return res.status(200).json({
      message: "Successfully updated address",
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

export { updateAddressController };
