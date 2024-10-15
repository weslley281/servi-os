import { DoctorRepository } from '../../repositories/implementations/DoctorRepository';
import { CreateDoctorController } from './CreateDoctorController';
import { CreateDoctorUseCase } from './CreateDoctorUseCase';

const doctorsRepository = DoctorRepository.getInstance();
const createDoctorUseCase = new CreateDoctorUseCase(doctorsRepository);
const createDoctorController = new CreateDoctorController(createDoctorUseCase);

export { createDoctorController };
