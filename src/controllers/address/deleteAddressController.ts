import { Request, Response } from "express";

import { deleteAddressService } from "../../services";

const deleteAddressController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const address = await deleteAddressService(id);
    return res.status(200).json({
      message: "Successfully deleted address",
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

export { deleteAddressController };
