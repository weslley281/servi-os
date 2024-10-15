import { Router } from 'express';
import { showDoctorProfileController } from '../modules/doctors/useCases/showDoctorProfile';
import { createDoctorController } from '../modules/doctors/useCases/createDoctor';
import { deleteDoctorController } from '../modules/doctors/useCases/deleteDoctor';
import { updateDoctorController } from '../modules/doctors/useCases/updateDoctor';

const doctorRoutes = Router();

doctorRoutes.post('/', (request, response) => {
  return createDoctorController.handle(request, response);
});

doctorRoutes.get('/:doctor_id', (request, response) => {
  return showDoctorProfileController.handle(request, response);
});

doctorRoutes.put('/', (request, response) => {
  return updateDoctorController.handle(request, response);
});

doctorRoutes.delete('/doctor_id', (request, response) => {
  return deleteDoctorController.handle(request, response);
});




export { doctorRoutes };
