import { ClientRepository } from '../../repositories/implementations/ClientRepository';
import { DeleteClientController } from './DeleteClientController';
import { DeleteClientUseCase } from './DeleteClientUseCase';

const clientRepository = ClientRepository.getInstance();
const deleteClientUseCase = new DeleteClientUseCase(clientRepository);
const deleteClientController = new DeleteClientController(deleteClientUseCase);

export { deleteClientController };
