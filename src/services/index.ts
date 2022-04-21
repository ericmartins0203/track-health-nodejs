import { getAllergiesServices } from "./allergy/getAllergiesService";
import allDiseaseService from "./disease/allDiseaseService";
import createNewDiseaseServices from "./disease/createNewDiseaseService";
import deleteDiseaseService from "./disease/deleteDiseaseService";
import createDiseaseServices from "./user_disease/createDiseaseService";
import deleteUserDiseaseService from "./user_disease/deleteUserDiseaseService";
import getUserDiseaseService from "./user_disease/getUserDiseaseService";
import updateUserDiseaseService from "./user_disease/updateUserDiseaseService";
import { CreateUserService } from "./user/createUserService";
import { getUserService } from "./user/getUserService";
import { updateUserService } from "./user/updateUserService";
import { createUserAllergyService } from "./userallergy/createUserAllergyService";
import { deleteUserAllergyService } from "./userallergy/deleteUserAllergyService";
import { getUserAllergiesServices } from "./userallergy/getUserAllergiesServices";
import { updateUserAllergyService } from "./userallergy/updateUSerAllergyService";
import { createVaccineService } from "./vaccine/CreateVaccineService";

export {
  createVaccineService,
  CreateUserService,
  updateUserDiseaseService,
  deleteUserDiseaseService,
  deleteDiseaseService,
  createDiseaseServices,
  getUserService,
  createNewDiseaseServices,
  getUserDiseaseService,
  allDiseaseService,
  getAllergiesServices,
  createUserAllergyService,
  updateUserService,
  getUserAllergiesServices,
  updateUserAllergyService,
  deleteUserAllergyService,
};
