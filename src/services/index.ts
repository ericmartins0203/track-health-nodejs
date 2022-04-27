import { allAddressService } from "./address/allAddressService";
import { createAddressService } from "./address/createAddressService";
import { deleteAddressService } from "./address/deleteAddressService";
import { updateAddressService } from "./address/updateAddressService";
import { getAllergiesServices } from "./allergy/getAllergiesService";
import { createAnamnesisService } from "./anamnesis/createAnamnesisServices";
import { deleteAnamnesisService } from "./anamnesis/deleteAnamneseController";
import { getAnamnesisService } from "./anamnesis/getAnamnesisService";
import { updateAnamnesisServices } from "./anamnesis/updateAnamnesisServices";
import { AllAppointmentsService } from "./appointments/allAppointmentsService";
import { createAppointmentService } from "./appointments/createAppointmentService";
import { deleteAppointmentService } from "./appointments/deleteAppointmentService";
import { updateAppointmentService } from "./appointments/updateAppointmentService";
import allDiseaseService from "./disease/allDiseaseService";
import createNewDiseaseServices from "./disease/createNewDiseaseService";
import deleteDiseaseService from "./disease/deleteDiseaseService";
import { allDoctorService } from "./doctor/allDoctorService";
import { createDoctorService } from "./doctor/createDoctorService";
import { deleteDoctorService } from "./doctor/deleteDoctorService";
import { updateDoctorService } from "./doctor/updateDoctorService";
import { getMedicationsService } from "./medication/getMedicationServices";
import { createProfileImageService } from "./profileImage/createProfileImageService";
import { deleteProfileImageService } from "./profileImage/deleteProfileImageService";
import { getProfileImageService } from "./profileImage/getProfileImageService";
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
import { createUserMedicationService } from "./userMedicaiton/createUserMedicationService";
import { deleteUserMedicationService } from "./userMedicaiton/deleteUserMedicationService";
import { getUserMedicationsService } from "./userMedicaiton/getUserMedicationsService";
import { updateUserMedicationService } from "./userMedicaiton/updateMedicationService";
import { createVaccineService } from "./vaccine/CreateVaccineService";
import { deleteUserVaccineService } from "./vaccine/deleteUserVaccineService";
import { updateUserVaccineService } from "./vaccine/updateUserVaccineService";

export {
  createVaccineService,
  allDoctorService,
  updateDoctorService,
  deleteDoctorService,
  createAddressService,
  allAddressService,
  updateAddressService,
  deleteAddressService,
  AllAppointmentsService,
  createAppointmentService,
  updateAppointmentService,
  deleteAppointmentService,
  createDoctorService,
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
  getMedicationsService,
  createUserMedicationService,
  getUserMedicationsService,
  updateUserMedicationService,
  deleteUserMedicationService,
  createAnamnesisService,
  getAnamnesisService,
  updateAnamnesisServices,
  deleteAnamnesisService,
  createProfileImageService,
  getProfileImageService,
  deleteProfileImageService,
  updateUserVaccineService,
  deleteUserVaccineService,
};
