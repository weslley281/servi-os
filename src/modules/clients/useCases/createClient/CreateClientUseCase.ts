import { hash } from 'bcrypt';
import { Client } from '../../model/Client';
import { IClientRepository } from '../../repositories/IClientPepository';

interface IRequest {
  name: string;
  phone: string;
  email: string;
  cpf: string;
  birthday: Date;
  password: string;
}

class CreateClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute({
    name,
    phone,
    email,
    cpf,
    birthday,
    password
  }: IRequest): Promise<Client> {
    const clientAlreadyExists = await this.clientRepository.findByEmail(email);

    if (clientAlreadyExists) throw new Error('User already exists');

    const passwordHash = await hash(password, 8);

    return await this.clientRepository.create({
      name,
      phone,
      email,
      cpf,
      birthday,
      password: passwordHash
    });
  }
}

export { CreateClientUseCase };
