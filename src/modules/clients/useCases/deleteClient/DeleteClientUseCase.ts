import { IClientRepository } from '../../repositories/IClientPepository';

interface IRequest {
  id: number;
}

class DeleteClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute({ id }: IRequest): Promise<void> {
    const clientExists = await this.clientRepository.findById(id);

    if (!clientExists) {
      throw new Error('Doutor não encontrado');
    }

    await this.clientRepository.deleteClient(id);
  }
}

export { DeleteClientUseCase };
