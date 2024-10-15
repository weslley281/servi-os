import { Client } from '../../model/Client';
import { IClientRepository } from '../../repositories/IClientPepository';

interface IRequest {
  client_id: number;
}

class ShowClientProfileUseCase {
  constructor(private clientsrepository: IClientRepository) {}

  async execute({ client_id }: IRequest): Promise<Client> {
    const client = await this.clientsrepository.findById(client_id);

    if (!client) throw new Error('O Doutor não existe');

    return this.clientsrepository.findById(client_id);
  }
}

export { ShowClientProfileUseCase };
