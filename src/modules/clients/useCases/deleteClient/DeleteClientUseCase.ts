import { IClientRepository } from '../../repositories/IClientPepository';

interface IRequest {
  user_id: number;
}

class DeleteClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute({ user_id }: IRequest): Promise<void> {
    const clientExists = await this.clientRepository.findById(user_id);

    if (!clientExists) {
      throw new Error('Doutor não encontrado');
    }

    await this.clientRepository.deleteClient(user_id);
  }
}

export { DeleteClientUseCase };
