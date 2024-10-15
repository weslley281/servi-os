import { IMedicalConsultationRepository } from '../../repositories/IMedicalConsultationPepository';

interface IRequest {
  m_consultation_id: number;
}

class DeleteMedicalConsultationUseCase {
  constructor(private medicalconsultationRepository: IMedicalConsultationRepository) {}

  async execute({ m_consultation_id }: IRequest): Promise<void> {
    const medicalconsultationExists = await this.medicalconsultationRepository.findById(m_consultation_id);

    if (!medicalconsultationExists) {
      throw new Error('Doutor não encontrado');
    }

    await this.medicalconsultationRepository.deleteMedicalConsultation(m_consultation_id);
  }
}

export { DeleteMedicalConsultationUseCase };
