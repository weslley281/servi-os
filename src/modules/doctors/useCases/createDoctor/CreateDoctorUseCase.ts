import { hash } from 'bcrypt';
import { Doctor } from '../../model/Doctor';
import { IDoctorRepository } from '../../repositories/IDoctorPepository';

interface IRequest {
  name: string;
  phone: string;
  email: string;
  cpf: string;
  birthday: Date;
  password: string;
  CRM: string;
  specialty: string;
}

class CreateDoctorUseCase {
  constructor(private doctorRepository: IDoctorRepository) {}

  async execute({
    name,
    phone,
    email,
    cpf,
    birthday,
    password,
    CRM,
    specialty,
  }: IRequest): Promise<Doctor> {
    const doctorAlreadyExists = await this.doctorRepository.findByEmail(email);

    if (doctorAlreadyExists) throw new Error('User already exists');

    const passwordHash = await hash(password, 8);

    return await this.doctorRepository.create({
      name,
      phone,
      email,
      cpf,
      birthday,
      password: passwordHash,
      CRM,
      specialty,
    });
  }
}

export { CreateDoctorUseCase };
