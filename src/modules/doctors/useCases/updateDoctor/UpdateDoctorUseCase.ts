import { IDoctorRepository } from '../../repositories/IDoctorPepository';

interface IRequest {
  id: number;
  name: string;
  phone: string;
  email: string;
  cpf: string;
  birthday: Date;
  CRM: string;
  specialty: string;
}
class UpdateDoctorUseCase {
  constructor(private doctorRepository: IDoctorRepository) {}

  async execute({id, name, phone, email, birthday, cpf, CRM, specialty }: IRequest) {
    const doctorAlreadyExists = await this.doctorRepository.findByEmail(email);

    if (doctorAlreadyExists) {
      return await this.doctorRepository.update({
        id, name, phone, email, birthday, cpf, CRM, specialty
      });
    } else {
      throw new Error('Doctor not exists');
    }
  }
}

export { UpdateDoctorUseCase };