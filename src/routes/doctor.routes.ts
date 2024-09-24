import { createDoctorController } from '@/modules/doctors/useCases/createDoctor';
import { Router } from 'express';

const doctorRoutes = Router();

doctorRoutes.post('/', (request, response) => {
  createDoctorController(request, response);
});
