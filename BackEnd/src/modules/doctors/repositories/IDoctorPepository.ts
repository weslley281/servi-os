import { ICreateDoctorDTO } from '../DTO/IDoctorDTO';
import { Doctor } from '../model/Doctor';

interface IDoctorRepository {
  create({
    user_type,
    name,
    phone,
    email,
    CPF,
    birthday,
    password,
    CRM,
    specialty,
  }: ICreateDoctorDTO): Promise<Doctor>;
  update({
    user_id,
    user_type,
    name,
    phone,
    email,
    CPF,
    birthday,
    password,
    CRM,
    specialty,
  }: ICreateDoctorDTO): Promise<Doctor>;
  findById(user_id: number): Promise<Doctor>;
  findByEmail(email: string): Promise<Doctor>;
  findByCRM(CRM: string): Promise<Doctor>;
  findByCPF(CRM: string): Promise<Doctor>;
  deleteDoctor(user_id: number): Promise<Boolean>;
  findByName(name: string): Promise<Doctor[]>;
  changePrivileges(user_id: number, user_type: string): Promise<Doctor>
  findAllUser(): Promise<Doctor[]>;
}

export { IDoctorRepository };
