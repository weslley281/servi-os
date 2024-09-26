import { DoctorRepository } from '../../repositories/implementations/DoctorRepository';
import { DeleteDoctorController } from './DeleteDoctorController';
import { DeleteDoctorUseCase } from './DeleteDoctorUseCase';

const doctorRepository = DoctorRepository.getInstance();
const deleteDoctorUseCase = new DeleteDoctorUseCase(doctorRepository);
const deleteDoctorController = new DeleteDoctorController(deleteDoctorUseCase);

export { deleteDoctorController };