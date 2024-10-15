import { ICreateMedicalConsultationDTO } from '../DTO/IMedicalConsultationtDTO';
import { MedicalConsultation } from '../model/MedicalConsultation';

interface IMedicalConsultationRepository {
  create({
    user_type,
    name,
    phone,
    email,
    cpf,
    birthday,
    password,
  }: ICreateMedicalConsultationDTO): Promise<MedicalConsultation>;
  update({
    user_id,
    user_type,
    name,
    phone,
    email,
    cpf,
    birthday,
    password,
  }: ICreateMedicalConsultationDTO): Promise<MedicalConsultation>;
  findById(user_id: number): Promise<MedicalConsultation>;
  findByEmail(email: string): Promise<MedicalConsultation>;
  findByCPF(CPF: string): Promise<MedicalConsultation>;
  deleteMedicalConsultation(user_id: number): Promise<Boolean>;
  findByName(name: string): Promise<MedicalConsultation[]>;
  findAllUser(): Promise<MedicalConsultation[]>;
  changePrivileges(user_id: number, user_type: string): Promise<MedicalConsultation>;
}

export { IMedicalConsultationRepository };
