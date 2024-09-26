import { DoctorRepository } from '../../repositories/implementations/DoctorRepository';
import { UpdateDoctorController } from './UpdateDoctorController';
import { UpdateDoctorUseCase } from './UpdateDoctorUseCase';

const doctorRepository = DoctorRepository.getInstance();
const updateDoctorUseCase = new UpdateDoctorUseCase(doctorRepository);
const updateDoctorController = new UpdateDoctorController(updateDoctorUseCase);

export { updateDoctorController };