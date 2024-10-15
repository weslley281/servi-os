import { IMedicalConsultationRepository } from '../../repositories/IMedicalConsultationPepository';

interface IRequest {
  m_consultation_id: number;
  appointment_date: Date;
  status: string;
  doctor_id: number;
  client_id: number;
}

class UpdateMedicalConsultationUseCase {
  constructor(
    private medicalconsultationRepository: IMedicalConsultationRepository
  ) {}

  async execute({
    m_consultation_id,
    appointment_date,
    status,
    doctor_id,
    client_id,
  }: IRequest) {

    return await this.medicalconsultationRepository.update({
      m_consultation_id,
      appointment_date,
      status,
      doctor_id,
      client_id,
    });
  }
}

export { UpdateMedicalConsultationUseCase };
