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
    id,
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
  deleteDoctor(id: number): Promise<Boolean>;
  findByName(): Promise<Doctor[]>;
  findAllUser(): Promise<Doctor[]>;
}

export { IDoctorRepository };
