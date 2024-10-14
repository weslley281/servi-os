import { userModel } from '../../../../database/models/userModel';
import { ICreateDoctorDTO } from '../../DTO/IDoctorDTO';
import { Doctor } from '../../model/Doctor';
import { IDoctorRepository } from '../IDoctorPepository';

class DoctorRepository implements IDoctorRepository {  
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
  }: ICreateDoctorDTO): Promise<Doctor> {
    const doctor: any = await userModel.update(
      {
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
      },
      { where: { id: id } }
    );

    return doctor;
  }

  async findById(user_id: number): Promise<Doctor> {
    const doctor: any = await userModel.findOne({ where: { id: user_id } });

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

  async deleteDoctor(id: number): Promise<boolean> {
    const deletedCount = await userModel.destroy({
      where: { id: id }
    });

    // Retorna true se a contagem de registros deletados for maior que 0, indicando sucesso
    return deletedCount > 0;
  }

  findByCPF(CPF: string): Promise<Doctor> {
    throw new Error('Method not implemented.');
  }
  
  findByName(): Promise<Doctor[]> {
    throw new Error('Method not implemented.');
  }
}

export { DoctorRepository };
