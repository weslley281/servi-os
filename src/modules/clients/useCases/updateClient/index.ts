import { ClientRepository } from '../../repositories/implementations/ClientRepository';
import { UpdateClientController } from './UpdateClientController';
import { UpdateClientUseCase } from './UpdateClientUseCase';

const clientRepository = ClientRepository.getInstance();
const updateClientUseCase = new UpdateClientUseCase(clientRepository);
const updateClientController = new UpdateClientController(updateClientUseCase);

export { updateClientController };
