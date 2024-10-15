import { hash } from 'bcrypt';
import { MedicalConsultation } from '../../model/MedicalConsultation';
import { IMedicalConsultationRepository } from '../../repositories/IMedicalConsultationPepository';

interface IRequest {
  user_type: string;
  name: string;
  phone: string;
  email: string;
  cpf: string;
  birthday: Date;
  password: string;
}

class CreateMedicalConsultationUseCase {
  constructor(private medicalconsultationRepository: IMedicalConsultationRepository) {}

  async execute({
    user_type,
    name,
    phone,
    email,
    cpf,
    birthday,
    password,
  }: IRequest): Promise<MedicalConsultation> {
    const medicalconsultationAlreadyExists = await this.medicalconsultationRepository.findByEmail(email);

    if (medicalconsultationAlreadyExists) throw new Error('User already exists');

    const passwordHash = await hash(password, 8);

    return await this.medicalconsultationRepository.create({
      user_type,
      name,
      phone,
      email,
      cpf,
      birthday,
      password: passwordHash,
    });
  }
}

export { CreateMedicalConsultationUseCase };
