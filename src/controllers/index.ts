import { getAllergies } from "./allergy/getAllergies";
import allDiseasesController from "./disease/allDiseasesController";
import createDiseaseController from "./disease/createDiseaseController";
import { loginController } from "./login/loginController";
import { createUserController } from "./user/createUserController";
import { getUserController } from "./user/getUserController";
import { updateUserController } from "./user/updateUserController";

export {
  createUserController,
  getUserController,
  updateUserController,
  getAllergies,
  loginController,
  allDiseasesController,
  createDiseaseController,
};
