import { IMedicalConsultationRepository } from '../../repositories/IMedicalConsultationPepository';

interface IRequest {
  user_id: number;
}

class DeleteMedicalConsultationUseCase {
  constructor(private medicalconsultationRepository: IMedicalConsultationRepository) {}

  async execute({ user_id }: IRequest): Promise<void> {
    const medicalconsultationExists = await this.medicalconsultationRepository.findById(user_id);

    if (!medicalconsultationExists) {
      throw new Error('Doutor não encontrado');
    }

    await this.medicalconsultationRepository.deleteMedicalConsultation(user_id);
  }
}

export { DeleteMedicalConsultationUseCase };
