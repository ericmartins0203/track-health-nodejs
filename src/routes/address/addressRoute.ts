import { Express, Router } from "express";

import {
  allAddressController,
  createAddressController,
  deleteAddressController,
  updateAddressController,
} from "../../controllers";
import { validateAuthToken, validateShape } from "../../middlewares";
import { addressShape } from "../../shapes";

const addressRoute = (app: Express) => {
  const addressRouter = Router();
  addressRouter.post(
    "",
    validateAuthToken,
    validateShape(addressShape),
    createAddressController
  );

  addressRouter.get("", validateAuthToken, allAddressController);

  addressRouter.patch(
    "/:id",
    validateAuthToken,
    validateShape(addressShape),
    updateAddressController
  );

  addressRouter.delete("/:id", validateAuthToken, deleteAddressController);

  app.use("/address", addressRouter);
};

export { addressRoute };
