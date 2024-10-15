import { MedicalConsultationRepository } from '../../repositories/implementations/MedicalConsultationRepository';
import { DeleteMedicalConsultationController } from './DeleteMedicalConsultationController';
import { DeleteMedicalConsultationUseCase } from './DeleteMedicalConsultationUseCase';

const medicalconsultationRepository = MedicalConsultationRepository.getInstance();
const deleteMedicalConsultationUseCase = new DeleteMedicalConsultationUseCase(medicalconsultationRepository);
const deleteMedicalConsultationController = new DeleteMedicalConsultationController(deleteMedicalConsultationUseCase);

export { deleteMedicalConsultationController };
