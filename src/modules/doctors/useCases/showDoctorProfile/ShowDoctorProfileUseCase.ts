import { Doctor } from "../../model/Doctor";
import { IDoctorRepository } from "../../repositories/IDoctorPepository";

interface IRequest {
  doctor_id: number;
}

class ShowDoctorProfileUseCase {
  constructor(private doctorsrepository: IDoctorRepository) {}

  async execute({ doctor_id }: IRequest): Promise<Doctor> {
    const doctor = await this.doctorsrepository.findById(doctor_id);

    if (!doctor) throw new Error('O Doutor não existe');

    return this.doctorsrepository.findById(doctor_id);
  }
}

export { ShowDoctorProfileUseCase };