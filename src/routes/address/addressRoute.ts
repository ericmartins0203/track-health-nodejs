import { Express, Router } from "express";

import { allAddressController } from "../../controllers/address/allAddressController";
import { createAddressController } from "../../controllers/address/createAddressController";
import { deleteAddressController } from "../../controllers/address/deleteAddressController";
import { updateAddressController } from "../../controllers/address/updateAddressController";
import { validateAuthToken, validateShape } from "../../middlewares";
import { addressShape } from "../../shapes";
import { updateAddressShape } from "../../shapes/address/addressShape";

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
    validateShape(updateAddressShape),
    updateAddressController
  );

  addressRouter.delete("/:id", validateAuthToken, deleteAddressController);

  app.use("/address", addressRouter);
};

export { addressRoute };
