import { hash } from 'bcrypt';
import { Doctor } from '../../model/Doctor';
import { IDoctorRepository } from '../../repositories/IDoctorPepository';

interface IRequest {
  user_type: string;
  name: string;
  phone: string;
  email: string;
  CPF: string;
  birthday: Date;
  password: string;
  CRM: string;
  specialty: string;
}

class CreateDoctorUseCase {
  constructor(private doctorRepository: IDoctorRepository) {}

  async execute({
    user_type,
    name,
    phone,
    email,
    CPF,
    birthday,
    password,
    CRM,
    specialty,
  }: IRequest): Promise<Doctor> {
    const doctorAlreadyExists = await this.doctorRepository.findByEmail(email);

    if (doctorAlreadyExists) throw new Error('User already exists');

    const passwordHash = await hash(password, 8);

    return await this.doctorRepository.create({
      user_type,
      name,
      phone,
      email,
      CPF,
      birthday,
      password: passwordHash,
      CRM,
      specialty,
    });
  }
}

export { CreateDoctorUseCase };
