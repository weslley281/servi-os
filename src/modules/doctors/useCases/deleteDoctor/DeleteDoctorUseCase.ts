import { IDoctorRepository } from "../../repositories/IDoctorPepository";


interface IRequest {
  id: number;
}

class DeleteDoctorUseCase {
  constructor(private doctorRepository: IDoctorRepository) {}

  async execute({ id }: IRequest): Promise<void> {
    const doctorExists = await this.doctorRepository.findById(id);

    if (!doctorExists) {
      throw new Error('Doutor não encontrado');
    }

    await this.doctorRepository.deleteDoctor(id);
  }
}

export { DeleteDoctorUseCase };
