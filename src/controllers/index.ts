import { allAddressController } from "./address/allAddressController";
import { createAddressController } from "./address/createAddressController";
import { deleteAddressController } from "./address/deleteAddressController";
import { updateAddressController } from "./address/updateAddressController";
import { getAllergies } from "./allergy/getAllergies";
import { deleteAnamnesisController } from "./anamnesis/deleteAnamnesisController";
import { getAnamnesisController } from "./anamnesis/getAnamnesisController";
import { updateAnamnesisController } from "./anamnesis/updateAnamnesisController";
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
import { getMedicationsController } from "./medication/getMedicationsController";
import { createProfileImageController } from "./profileImage.ts/createProfileImageController";
import { deleteProfileImageController } from "./profileImage.ts/deleteProfileImageController";
import { getProfileImageController } from "./profileImage.ts/getProfileImageController";
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
  getMedicationsController,
  createUserMedicationController,
  getUserMedicationsController,
  updateUserMedicationController,
  deleteUserMedicationController,
  getAnamnesisController,
  updateAnamnesisController,
  deleteAnamnesisController,
  createProfileImageController,
  getProfileImageController,
  deleteProfileImageController,
};
