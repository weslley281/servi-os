import { DoctorRepository } from '../../repositories/implementations/DoctorRepository';
import { ShowDoctorProfileController } from './ShowDoctorProfileController';
import { ShowDoctorProfileUseCase } from './ShowDoctorProfileUseCase';

const doctorRepository = DoctorRepository.getInstance();
const showDoctorProfileUseCase = new ShowDoctorProfileUseCase(doctorRepository);
const showDoctorProfileController = new ShowDoctorProfileController(
  showDoctorProfileUseCase
);

export { showDoctorProfileController };