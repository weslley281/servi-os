import { Op } from 'sequelize';
import { medicalConsultationModel } from 'src/database/models/medicalConsultationModel';
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

  // Criação de uma nova consulta médica
  async create({
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
  }: ICreateMedicalConsultationDTO): Promise<MedicalConsultation> {
    const consultation: any = await medicalConsultationModel.create({
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
      consultation_fee,
    });

    return consultation;
  }

  // Atualização de uma consulta médica existente
  async update({
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
  }: ICreateMedicalConsultationDTO): Promise<MedicalConsultation> {
    const consultation: any = await medicalConsultationModel.update(
      {
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
      },
      { where: { id: m_consultation_id } }
    );

    const updatedConsultation: any = await medicalConsultationModel.findOne({
      where: { id: m_consultation_id },
    });

    return updatedConsultation;
  }

  // Buscar consulta por ID
  async findById(m_consultation_id: number): Promise<MedicalConsultation> {
    const consultation: any = await medicalConsultationModel.findOne({
      where: { id: m_consultation_id },
    });

    return consultation;
  }

  // Deletar uma consulta
  async deleteMedicalConsultation(m_consultation_id: number): Promise<Boolean> {
    const deletedCount = await medicalConsultationModel.destroy({
      where: { id: m_consultation_id },
    });

    return deletedCount > 0;
  }

  // Buscar todas as consultas por status
  async findAllByStatus(status: string): Promise<MedicalConsultation[]> {
    const consultations: any = await medicalConsultationModel.findAll({
      where: { status },
    });

    return consultations;
  }

  // Buscar todas as consultas dentro de um intervalo de datas
  async findAllByDate(initialDate: Date, finalDate: Date): Promise<MedicalConsultation[]> {
    const consultations: any = await medicalConsultationModel.findAll({
      where: {
        appointment_date: {
          [Op.between]: [initialDate, finalDate],
        },
      },
    });

    return consultations;
  }

  // Buscar todas as consultas por ID do cliente
  async findByAllConsultationByClientId(client_id: string): Promise<MedicalConsultation[]> {
    const consultations: any = await medicalConsultationModel.findAll({
      where: { client_id },
    });

    return consultations;
  }

  // Buscar todas as consultas por ID do médico
  async findByAllConsultationByDoctorId(doctor_id: string): Promise<MedicalConsultation[]> {
    const consultations: any = await medicalConsultationModel.findAll({
      where: { doctor_id },
    });

    return consultations;
  }

  // Buscar todas as consultas (sem filtros)
  async findAllUser(): Promise<MedicalConsultation[]> {
    const consultations: any = await medicalConsultationModel.findAll();
    return consultations;
  }
}

export { MedicalConsultationRepository };
