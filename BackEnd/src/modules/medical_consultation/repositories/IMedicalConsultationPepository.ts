import { ICreateMedicalConsultationDTO } from '../DTO/IMedicalConsultationtDTO';
import { MedicalConsultation } from '../model/MedicalConsultation';

interface IMedicalConsultationRepository {
  create({
    appointment_date,
    duration,
    status,
    doctor_id,
    client_id,
    reported_symptoms,
    diagnosis,
    prescription,
    notes,
    requested_exams,
    exam_results,
    reason_for_visit,
    payment_method,
    consultation_fee
  }: ICreateMedicalConsultationDTO): Promise<MedicalConsultation>;
  update({
    m_consultation_id,
    appointment_date,
    duration,
    status,
    doctor_id,
    client_id,
    reported_symptoms,
    diagnosis,
    prescription,
    notes,
    requested_exams,
    exam_results,
    reason_for_visit,
    payment_method,
    consultation_fee
  }: ICreateMedicalConsultationDTO): Promise<MedicalConsultation>;
  findById(m_consultation_id: number): Promise<MedicalConsultation>;
  deleteMedicalConsultation(m_consultation_id: number): Promise<Boolean>;
  findAllByStatus(status: string): Promise<MedicalConsultation[]>;
  findAllByDate(initialDate: Date, finalDate: Date): Promise<MedicalConsultation[]>;
  findByAllConsultationByClientId(client_id: string): Promise<MedicalConsultation[]>;
  findByAllConsultationByDoctorId(doctor_id: string): Promise<MedicalConsultation[]>;
  findAllUser(): Promise<MedicalConsultation[]>;
}

export { IMedicalConsultationRepository };
