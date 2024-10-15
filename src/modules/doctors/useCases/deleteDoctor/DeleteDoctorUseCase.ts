import { IDoctorRepository } from "../../repositories/IDoctorPepository";


interface IRequest {
  user_id: number;
}

class DeleteDoctorUseCase {
  constructor(private doctorRepository: IDoctorRepository) {}

  async execute({ user_id }: IRequest): Promise<void> {
    const doctorExists = await this.doctorRepository.findById(user_id);

    if (!doctorExists) {
      throw new Error('Doutor não encontrado');
    }

    await this.doctorRepository.deleteDoctor(user_id);
  }
}

export { DeleteDoctorUseCase };
