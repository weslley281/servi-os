import { userModel } from 'src/database/models/userModel';
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
    user_type,
    name,
    phone,
    email,
    cpf,
    birthday,
    password,
  }: ICreateClientDTO): Promise<Client> {
    const client: any = await userModel.create({
      user_type,
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
    user_id,
    user_type,
    name,
    phone,
    email,
    cpf,
    birthday,
    password,
  }: ICreateClientDTO): Promise<Client> {
    const client: any = await userModel.update(
      {
        user_id,
        user_type,
        name,
        phone,
        email,
        cpf,
        birthday,
        password,
      },
      { where: { user_id } }
    );

    return client;
  }

  async findById(user_id: number): Promise<Client> {
    const client: any = await userModel.findOne({ where: { id: user_id } });

    return client;
  }

  async findByEmail(email: string): Promise<Client> {
    const client: any = await userModel.findOne({ where: { email: email } });

    return client;
  }

  async findByCPF(CPF: string): Promise<Client> {
    const client: any = await userModel.findOne({ where: { cpf: CPF } });

    return client;
  }

  async findAllUser(): Promise<Client[]> {
    const client: any = await userModel.findAll();

    return client;
  }

  async deleteClient(user_id: number): Promise<boolean> {
    const deletedCount = await userModel.destroy({
      where: { user_id },
    });

    // Retorna true se a contagem de registros deletados for maior que 0, indicando sucesso
    return deletedCount > 0;
  }

  async findByName(name: string): Promise<Client[]> {
    const users: any = await userModel.findAll({ where: { name } });

    return users;
  }

  async changePrivileges(user_id: number, user_type: string): Promise<Client> {
    const user: any = await userModel.update(
      { user_type },
      { where: { user_id } }
    );

    const updatedUser: any = await userModel.findOne({ where: { user_id } });

    return updatedUser;
  }
}

export { ClientRepository };
