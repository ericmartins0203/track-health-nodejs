import { getAllergies } from "./allergy/getAllergies";
import { getAnamnesisController } from "./anamnesis/getAnamnesisController";
import { updateAnamnesisController } from "./anamnesis/updateAnamnesisController";
import allDiseasesController from "./disease/allDiseasesController";
import createNewDiseaseController from "./disease/createNewDiseaseController";
import deleteDiseaseController from "./disease/deleteDiseaseController";
import { loginController } from "./login/loginController";
import { getMedicationsController } from "./medication/getMedicationsController";
import { createUserController } from "./user/createUserController";
import { getUserController } from "./user/getUserController";
import { updateUserController } from "./user/updateUserController";
import { deleteUserAllergy } from "./userallergy/deleteUserAllergy";
import { getUserAllergies } from "./userallergy/getUserAllergies";
import createDiseaseController from "./userDisease/createDiseaseController";
import deleteUserDiseaseController from "./userDisease/deleteUserDiseaseController";
import getUserDiseaseController from "./userDisease/getUserDiseaseController";
import updateUserDiseaseController from "./userDisease/updateUserDiseaseController";
import { createUserMedicationController } from "./userMedication/createUserMedicationsController";
import { deleteUserMedicationController } from "./userMedication/deleteUserMedicationController";
import { getUserMedicationsController } from "./userMedication/getUserMedicationController";
import { updateUserMedicationController } from "./userMedication/updateUserMedicationController";

export {
  updateUserDiseaseController,
  deleteUserDiseaseController,
  createUserController,
  deleteDiseaseController,
  getUserDiseaseController,
  getUserController,
  updateUserController,
  createNewDiseaseController,
  getAllergies,
  loginController,
  allDiseasesController,
  createDiseaseController,
  getUserAllergies,
  deleteUserAllergy,
  getMedicationsController,
  createUserMedicationController,
  getUserMedicationsController,
  updateUserMedicationController,
  deleteUserMedicationController,
  getAnamnesisController,
  updateAnamnesisController,
};
