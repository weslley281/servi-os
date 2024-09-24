import { createDoctorController } from '../modules/doctors/useCases/createDoctor';
import { Router } from 'express';

const doctorRoutes = Router();

doctorRoutes.post('/', (request, response) => {
  return createDoctorController.handle(request, response);
});

export { doctorRoutes };
