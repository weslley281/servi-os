import { ClientRepository } from '../../repositories/implementations/ClientRepository';
import { CreateClientController } from './CreateClientController';
import { CreateClientUseCase } from './CreateClientUseCase';

const clientsRepository = ClientRepository.getInstance();
const createClientUseCase = new CreateClientUseCase(clientsRepository);
const createClientController = new CreateClientController(createClientUseCase);

export { createClientController };
