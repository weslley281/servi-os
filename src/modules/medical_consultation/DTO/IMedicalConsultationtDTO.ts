interface ICreateMedicalConsultationDTO {
  m_consultation_id?: number;
  appointment_date: string;
  duration: number;
  status: string;
  doctor_id: number;
  
}

export { ICreateMedicalConsultationDTO };
