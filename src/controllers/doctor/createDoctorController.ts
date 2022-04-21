import { Request, Response } from "express";

import { IDoctorInterface } from "../../repositories/doctor/interfaceDoctorRepository";
import { createDoctorService } from "../../services";

const createDoctorController = async (req: Request, res: Response) => {
  try {
    const { name, type, email, phone, sex, addressId } =
      req.validate as IDoctorInterface;
    const doctor = await createDoctorService(
      name,
      type,
      email,
      phone,
      sex,
      addressId
    );
    return res
      .status(201)
      .json({ message: "Doctor created successfully", doctor });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    return res.status(500).json({
      message: "Unexpected error.",
    });
  }
};

export { createDoctorController };
