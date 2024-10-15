import { userModel } from '../../../../database/models/userModel';
import { ICreateDoctorDTO } from '../../DTO/IDoctorDTO';
import { Doctor } from '../../model/Doctor';
import { IDoctorRepository } from '../IDoctorPepository';

class DoctorRepository implements IDoctorRepository {
  changePrivileges(user_id: number, user_type: string): Promise<Doctor> {
    throw new Error('Method not implemented.');
  }  
  private static INSTANCE: DoctorRepository;

  public static getInstance() {
    if (!DoctorRepository.INSTANCE) {
      DoctorRepository.INSTANCE = new DoctorRepository();
    }

    return DoctorRepository.INSTANCE;
  }

  async create({
    user_type,
    name,
    phone,
    email,
    CPF,
    birthday,
    password,
    CRM,
    specialty,
  }: ICreateDoctorDTO): Promise<Doctor> {
    const doctor: any = await userModel.create({
      user_type,
      name,
      phone,
      email,
      CPF,
      birthday,
      password,
      CRM,
      specialty,
    });

    return doctor;
  }

  async update({
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
  }: ICreateDoctorDTO): Promise<Doctor> {
    const doctor: any = await userModel.update(
      {
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
      },
      { where: { user_id } }
    );

    return doctor;
  }

  async findById(user_id: number): Promise<Doctor> {
    const doctor: any = await userModel.findOne({ where: { user_id } });

    return doctor;
  }

  async findByEmail(email: string): Promise<Doctor> {
    const doctor: any = await userModel.findOne({ where: { email: email } });

    return doctor;
  }

  async findByCRM(CRM: string): Promise<Doctor> {
    const doctor: any = await userModel.findOne({ where: { CRM } });

    return doctor;
  }

  async findAllUser(): Promise<Doctor[]> {
    const doctor: any = await userModel.findAll();

    return doctor;
  }

  async deleteDoctor(user_id: number): Promise<boolean> {
    const deletedCount = await userModel.destroy({
      where: { user_id }
    });

    return deletedCount > 0;
  }

  async findByCPF(CPF: string): Promise<Doctor> {
    const user: any = await userModel.findOne({ where: { CPF } });

    return user;
  }
  
  async findByName(name: string): Promise<Doctor[]> {
    const users: any = await userModel.findAll({ where: { name } });

    return users;
  }
}

export { DoctorRepository };
