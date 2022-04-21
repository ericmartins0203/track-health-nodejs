import { allAddressController } from "./address/allAddressController";
import { createAddressController } from "./address/createAddressController";
import { deleteAddressController } from "./address/deleteAddressController";
import { updateAddressController } from "./address/updateAddressController";
import { getAllergies } from "./allergy/getAllergies";
import { allAppointmentsController } from "./appointments/allAppointmentsController";
import { createAppointmentController } from "./appointments/createAppointmentController";
import { deleteAppointmentController } from "./appointments/deleteAppointmentController";
import { updateAppointmentController } from "./appointments/updateAppointmentController";
import allDiseasesController from "./disease/allDiseasesController";
import createNewDiseaseController from "./disease/createNewDiseaseController";
import deleteDiseaseController from "./disease/deleteDiseaseController";
import { allDoctorController } from "./doctor/allDoctorController";
import { createDoctorController } from "./doctor/createDoctorController";
import { deleteDoctorController } from "./doctor/deleteDoctorController";
import { updateDoctorController } from "./doctor/updateDoctorController";
import { loginController } from "./login/loginController";
import { createUserController } from "./user/createUserController";
import { getUserController } from "./user/getUserController";
import { updateUserController } from "./user/updateUserController";
import { deleteUserAllergy } from "./userallergy/deleteUserAllergy";
import { getUserAllergies } from "./userallergy/getUserAllergies";
import createDiseaseController from "./userDisease/createDiseaseController";
import deleteUserDiseaseController from "./userDisease/deleteUserDiseaseController";
import getUserDiseaseController from "./userDisease/getUserDiseaseController";
import updateUserDiseaseController from "./userDisease/updateUserDiseaseController";

export {
  deleteDoctorController,
  allDoctorController,
  updateDoctorController,
  allAddressController,
  createAddressController,
  updateAddressController,
  deleteAddressController,
  allAppointmentsController,
  createAppointmentController,
  updateAppointmentController,
  deleteAppointmentController,
  createDoctorController,
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
};
