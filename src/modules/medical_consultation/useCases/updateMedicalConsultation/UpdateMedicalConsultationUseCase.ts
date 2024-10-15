import { IMedicalConsultationRepository } from '../../repositories/IMedicalConsultationPepository';

interface IRequest {
  user_id: number;
  user_type: string;
  name: string;
  phone: string;
  email: string;
  cpf: string;
  birthday: Date;
}

class UpdateMedicalConsultationUseCase {
  constructor(private medicalconsultationRepository: IMedicalConsultationRepository) {}

  async execute({
    user_id,
    user_type,
    name,
    phone,
    email,
    birthday,
    cpf,
  }: IRequest) {
    // Verifica a existência do médico pelo ID
    const medicalconsultationAlreadyExists = await this.medicalconsultationRepository.findByCPF(cpf);

    if (!medicalconsultationAlreadyExists) {
      throw new Error(`O Doutor com CRM ${cpf} não existe`);
    }

    // Atualiza os dados do médico
    return await this.medicalconsultationRepository.update({
      user_id,
      user_type,
      name,
      phone,
      email,
      birthday,
      cpf,
    });
  }
}

export { UpdateMedicalConsultationUseCase };
