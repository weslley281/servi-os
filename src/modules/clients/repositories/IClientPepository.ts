import { ICreateClientDTO } from '../DTO/IClientDTO';
import { Client } from '../model/Client';

interface IClientRepository {
  create({
    name,
    phone,
    email,
    cpf,
    birthday,
    password,
  }: ICreateClientDTO): Promise<Client>;
  update({
    id,
    name,
    phone,
    email,
    cpf,
    birthday,
    password,
  }: ICreateClientDTO): Promise<Client>;
  findById(user_id: number): Promise<Client>;
  findByEmail(email: string): Promise<Client>;
  findByCPF(CPF: string): Promise<Client>;
  deleteClient(id: number): Promise<Boolean>;
  findAllUser(): Promise<Client[]>;
}

export { IClientRepository };
