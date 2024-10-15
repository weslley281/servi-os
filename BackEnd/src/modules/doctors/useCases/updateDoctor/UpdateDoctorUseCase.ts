import { IDoctorRepository } from "../../repositories/IDoctorPepository";


interface IRequest {
  user_id: number;
  user_type: string;
  name: string;
  phone: string;
  email: string;
  CPF: string;
  birthday: Date;
  CRM: string;
  specialty: string;
}

class UpdateDoctorUseCase {
  constructor(private doctorRepository: IDoctorRepository) {}

  async execute({ user_id, user_type, name, phone, email, birthday, CPF, CRM, specialty }: IRequest) {
    // Verifica a existência do médico pelo ID
    const doctorAlreadyExists = await this.doctorRepository.findByCRM(CRM);

    if (!doctorAlreadyExists) {
      throw new Error(`O Doutor com CRM ${CRM} não existe`);
    }

    // Atualiza os dados do médico
    return await this.doctorRepository.update({
      user_id,
      user_type,
      name,
      phone,
      email,
      birthday,
      CPF,
      CRM,
      specialty
    });
  }
}

export { UpdateDoctorUseCase };
