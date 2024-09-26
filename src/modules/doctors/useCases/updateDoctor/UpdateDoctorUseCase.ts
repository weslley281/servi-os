import { IDoctorRepository } from "../../repositories/IDoctorPepository";


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

  async execute({ id, name, phone, email, birthday, cpf, CRM, specialty }: IRequest) {
    // Verifica a existência do médico pelo ID
    const doctorAlreadyExists = await this.doctorRepository.findByCRM(CRM);

    if (!doctorAlreadyExists) {
      throw new Error(`O Doutor com CRM ${CRM} não existe`);
    }

    // Atualiza os dados do médico
    return await this.doctorRepository.update({
      id,
      name,
      phone,
      email,
      birthday,
      cpf,
      CRM,
      specialty
    });
  }
}

export { UpdateDoctorUseCase };
