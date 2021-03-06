import { addressShape } from "./address/addressShape";
import { createUserAllergyShape } from "./allergy/createUserAllergyShape";
import { createAnamnesisShape } from "./anamnesis/createAnamnesisShape";
import { updateAnamnesisShape } from "./anamnesis/updateAnamnesisShape";
import {
  appointmentShape,
  updateAppointmentShape,
} from "./appointment/appointmentShape";
import { diseaseShape } from "./disease/diseaseShape";
import { doctorShape, updateDoctorShape } from "./doctor/doctorShape";
import { loginUserShape } from "./login/loginShape";
import { createUserMedicationShape } from "./medication/createUserMedicationShape";
import { surgeryShape } from "./surgery/createSurgeryShape";
import { createUserShape } from "./user/CreateUserShape";
import { updateUserShape } from "./user/UpdateUserShape";
import { createVaccineShape } from "./vaccine/createVaccineShape";

export {
  createVaccineShape,
  addressShape,
  appointmentShape,
  updateAppointmentShape,
  createUserShape,
  doctorShape,
  updateDoctorShape,
  loginUserShape,
  updateUserShape,
  diseaseShape,
  createUserAllergyShape,
  createUserMedicationShape,
  createAnamnesisShape,
  updateAnamnesisShape,
  surgeryShape,
};
