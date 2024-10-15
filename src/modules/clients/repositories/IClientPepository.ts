import { ICreateClientDTO } from '../DTO/IClientDTO';
import { Client } from '../model/Client';

interface IClientRepository {
  create({
    user_type,
    name,
    phone,
    email,
    cpf,
    birthday,
    password,
  }: ICreateClientDTO): Promise<Client>;
  update({
    user_id,
    user_type,
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
  deleteClient(user_id: number): Promise<Boolean>;
  findByName(name: string): Promise<Client[]>;
  findAllUser(): Promise<Client[]>;
  changePrivileges(user_id: number, user_type: string): Promise<Client>
}

export { IClientRepository };
