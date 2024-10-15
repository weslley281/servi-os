import { MedicalConsultationRepository } from '../../repositories/implementations/MedicalConsultationRepository';
import { CreateMedicalConsultationController } from './CreateMedicalConsultationController';
import { CreateMedicalConsultationUseCase } from './CreateMedicalConsultationUseCase';

const medicalconsultationsRepository = MedicalConsultationRepository.getInstance();
const createMedicalConsultationUseCase = new CreateMedicalConsultationUseCase(medicalconsultationsRepository);
const createMedicalConsultationController = new CreateMedicalConsultationController(createMedicalConsultationUseCase);

export { createMedicalConsultationController };
