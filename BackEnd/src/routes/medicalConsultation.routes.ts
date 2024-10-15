import { Router } from 'express';
import { createMedicalConsultationController } from '../modules/medical_consultation/useCases/createMedicalConsultation';
import { deleteMedicalConsultationController } from '../modules/medical_consultation/useCases/deleteMedicalConsultation';
import { updateMedicalConsultationController } from '../modules/medical_consultation/useCases/updateMedicalConsultation';
const medicalconsultationRoutes = Router();

medicalconsultationRoutes.post('/', (request, response) => {
  return createMedicalConsultationController.handle(request, response);
});

medicalconsultationRoutes.put('/', (request, response) => {
  return updateMedicalConsultationController.handle(request, response);
});

medicalconsultationRoutes.delete('/m_consultation_id', (request, response) => {
  return deleteMedicalConsultationController.handle(request, response);
});




export { medicalconsultationRoutes };
