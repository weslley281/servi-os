import { ClientRepository } from '../../repositories/implementations/ClientRepository';
import { ShowClientProfileController } from './ShowClientProfileController';
import { ShowClientProfileUseCase } from './ShowClientProfileUseCase';

const clientRepository = ClientRepository.getInstance();
const showClientProfileUseCase = new ShowClientProfileUseCase(clientRepository);
const showClientProfileController = new ShowClientProfileController(
  showClientProfileUseCase
);

export { showClientProfileController };
