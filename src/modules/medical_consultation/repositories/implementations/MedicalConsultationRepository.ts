import { userModel } from 'src/database/models/userModel';
import { ICreateMedicalConsultationDTO } from '../../DTO/IMedicalConsultationtDTO';
import { MedicalConsultation } from '../../model/MedicalConsultation';
import { IMedicalConsultationRepository } from '../IMedicalConsultationPepository';

class MedicalConsultationRepository implements IMedicalConsultationRepository {
  private static INSTANCE: MedicalConsultationRepository;

  public static getInstance() {
    if (!MedicalConsultationRepository.INSTANCE) {
      MedicalConsultationRepository.INSTANCE = new MedicalConsultationRepository();
    }

    return MedicalConsultationRepository.INSTANCE;
  }

  async create({
    user_type,
    name,
    phone,
    email,
    cpf,
    birthday,
    password,
  }: ICreateMedicalConsultationDTO): Promise<MedicalConsultation> {
    const medicalconsultation: any = await userModel.create({
      user_type,
      name,
      phone,
      email,
      cpf,
      birthday,
      password,
    });

    return medicalconsultation;
  }

  async update({
    user_id,
    user_type,
    name,
    phone,
    email,
    cpf,
    birthday,
    password,
  }: ICreateMedicalConsultationDTO): Promise<MedicalConsultation> {
    const medicalconsultation: any = await userModel.update(
      {
        user_id,
        user_type,
        name,
        phone,
        email,
        cpf,
        birthday,
        password,
      },
      { where: { user_id } }
    );

    return medicalconsultation;
  }

  async findById(user_id: number): Promise<MedicalConsultation> {
    const medicalconsultation: any = await userModel.findOne({ where: { id: user_id } });

    return medicalconsultation;
  }

  async findByEmail(email: string): Promise<MedicalConsultation> {
    const medicalconsultation: any = await userModel.findOne({ where: { email: email } });

    return medicalconsultation;
  }

  async findByCPF(CPF: string): Promise<MedicalConsultation> {
    const medicalconsultation: any = await userModel.findOne({ where: { cpf: CPF } });

    return medicalconsultation;
  }

  async findAllUser(): Promise<MedicalConsultation[]> {
    const medicalconsultation: any = await userModel.findAll();

    return medicalconsultation;
  }

  async deleteMedicalConsultation(user_id: number): Promise<boolean> {
    const deletedCount = await userModel.destroy({
      where: { user_id },
    });

    // Retorna true se a contagem de registros deletados for maior que 0, indicando sucesso
    return deletedCount > 0;
  }

  async findByName(name: string): Promise<MedicalConsultation[]> {
    const users: any = await userModel.findAll({ where: { name } });

    return users;
  }

  async changePrivileges(user_id: number, user_type: string): Promise<MedicalConsultation> {
    const user: any = await userModel.update(
      { user_type },
      { where: { user_id } }
    );

    const updatedUser: any = await userModel.findOne({ where: { user_id } });

    return updatedUser;
  }
}

export { MedicalConsultationRepository };
