import { doctorModel } from '../../../../database/models/doctorModel';
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
    name,
    phone,
    email,
    cpf,
    birthday,
    password,
    CRM,
    specialty,
  }: ICreateDoctorDTO): Promise<Doctor> {
    const doctor: any = await doctorModel.create({
      name,
      phone,
      email,
      cpf,
      birthday,
      password,
      CRM,
      specialty,
    });

    return doctor;
  }

  async update({
    id,
    name,
    phone,
    email,
    cpf,
    birthday,
    password,
    CRM,
    specialty,
  }: ICreateDoctorDTO): Promise<Doctor> {
    const doctor: any = await doctorModel.update(
      {
        id,
        name,
        phone,
        email,
        cpf,
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
    const doctor: any = await doctorModel.findOne({ where: { id: user_id } });

    return doctor;
  }

  async findByEmail(email: string): Promise<Doctor> {
    const doctor: any = await doctorModel.findOne({ where: { email: email } });

    return doctor;
  }

  async findByCRM(CRM: string): Promise<Doctor> {
    const doctor: any = await doctorModel.findOne({ where: { CRM } });

    return doctor;
  }

  async findAllUser(): Promise<Doctor[]> {
    const doctor: any = await doctorModel.findAll();

    return doctor;
  }

  async deleteDoctor(id: number): Promise<boolean> {
    const deletedCount = await doctorModel.destroy({
      where: { id: id }
    });

    // Retorna true se a contagem de registros deletados for maior que 0, indicando sucesso
    return deletedCount > 0;
  }
}

export { DoctorRepository };
