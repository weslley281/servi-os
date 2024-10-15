import { MedicalConsultationRepository } from '../../repositories/implementations/MedicalConsultationRepository';
import { UpdateMedicalConsultationController } from './UpdateMedicalConsultationController';
import { UpdateMedicalConsultationUseCase } from './UpdateMedicalConsultationUseCase';

const medicalconsultationRepository = MedicalConsultationRepository.getInstance();
const updateMedicalConsultationUseCase = new UpdateMedicalConsultationUseCase(medicalconsultationRepository);
const updateMedicalConsultationController = new UpdateMedicalConsultationController(updateMedicalConsultationUseCase);

export { updateMedicalConsultationController };
