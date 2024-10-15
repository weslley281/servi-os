import { MedicalConsultation } from '../../model/MedicalConsultation';
import { IMedicalConsultationRepository } from '../../repositories/IMedicalConsultationPepository';

interface IRequest {
  appointment_date: Date;
  status: string;
  doctor_id: number;
  client_id: number;
}

class CreateMedicalConsultationUseCase {
  constructor(
    private medicalconsultationRepository: IMedicalConsultationRepository
  ) {}

  async execute({
    appointment_date,
    status,
    doctor_id,
    client_id,
  }: IRequest): Promise<MedicalConsultation> {
    return await this.medicalconsultationRepository.create({
      appointment_date,
      status,
      doctor_id,
      client_id,
    });
  }
}

export { CreateMedicalConsultationUseCase };
