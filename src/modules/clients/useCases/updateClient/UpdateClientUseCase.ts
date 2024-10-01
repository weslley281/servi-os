import { IClientRepository } from '../../repositories/IClientPepository';

interface IRequest {
  id: number;
  name: string;
  phone: string;
  email: string;
  cpf: string;
  birthday: Date;
}

class UpdateClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute({
    id,
    name,
    phone,
    email,
    birthday,
    cpf
  }: IRequest) {
    // Verifica a existência do médico pelo ID
    const clientAlreadyExists = await this.clientRepository.findByCPF(cpf);

    if (!clientAlreadyExists) {
      throw new Error(`O Doutor com CRM ${cpf} não existe`);
    }

    // Atualiza os dados do médico
    return await this.clientRepository.update({
      id,
      name,
      phone,
      email,
      birthday,
      cpf
    });
  }
}

export { UpdateClientUseCase };
