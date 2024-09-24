import { ICreateDoctorDTO } from '../DTO/IDoctorDTO';
import { Doctor } from '../model/Doctor';

interface IDoctorRepository {
  create({
    name,
    phone,
    email,
    cpf,
    birthday,
    password,
    CRM,
    specialty,
  }: ICreateDoctorDTO): Promise<Doctor>;
  update({
    id,
    name,
    phone,
    email,
    cpf,
    birthday,
    password,
    CRM,
    specialty,
  }: ICreateDoctorDTO): Promise<Doctor>;
  findById(user_id: number): Promise<Doctor>;
  findByEmail(email: string): Promise<Doctor>;
  findAllUser(): Promise<Doctor[]>;
}

export { IDoctorRepository };
