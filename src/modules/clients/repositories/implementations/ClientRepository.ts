import { clientModel } from '../../../../database/models/clientModel';
import { ICreateClientDTO } from '../../DTO/IClientDTO';
import { Client } from '../../model/Client';
import { IClientRepository } from '../IClientPepository';

class ClientRepository implements IClientRepository {
  private static INSTANCE: ClientRepository;

  public static getInstance() {
    if (!ClientRepository.INSTANCE) {
      ClientRepository.INSTANCE = new ClientRepository();
    }

    return ClientRepository.INSTANCE;
  }

  async create({
    name,
    phone,
    email,
    cpf,
    birthday,
    password
  }: ICreateClientDTO): Promise<Client> {
    const client: any = await clientModel.create({
      name,
      phone,
      email,
      cpf,
      birthday,
      password,
    });

    return client;
  }

  async update({
    id,
    name,
    phone,
    email,
    cpf,
    birthday,
    password
  }: ICreateClientDTO): Promise<Client> {
    const client: any = await clientModel.update(
      {
        id,
        name,
        phone,
        email,
        cpf,
        birthday,
        password
      },
      { where: { id: id } }
    );

    return client;
  }

  async findById(user_id: number): Promise<Client> {
    const client: any = await clientModel.findOne({ where: { id: user_id } });

    return client;
  }

  async findByEmail(email: string): Promise<Client> {
    const client: any = await clientModel.findOne({ where: { email: email } });

    return client;
  }

  async findByCPF(CPF: string): Promise<Client> {
    const client: any = await clientModel.findOne({ where: { cpf: CPF } });

    return client;
  }

  async findAllUser(): Promise<Client[]> {
    const client: any = await clientModel.findAll();

    return client;
  }

  async deleteClient(id: number): Promise<boolean> {
    const deletedCount = await clientModel.destroy({
      where: { id: id },
    });

    // Retorna true se a contagem de registros deletados for maior que 0, indicando sucesso
    return deletedCount > 0;
  }
}

export { ClientRepository };
