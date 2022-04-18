/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-namespace */

import { IDecoded, IUserAllergiesShape } from "../interfaces";
import { IUserInterface } from "../repositories/user/InterfaceUserRepository";

declare global {
  namespace Express {
    export interface Request {
      validate: IUserInterface | IUserAllergiesShape;
      decoded: IDecoded;
    }
  }
}
