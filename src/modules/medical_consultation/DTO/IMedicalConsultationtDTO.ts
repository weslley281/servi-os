interface ICreateMedicalConsultationDTO {
  m_consultation_id?: number;
  appointment_date: Date;
  duration?: number;
  status: string;
  doctor_id: number;
  client_id: number;
  reported_symptoms?: string;
  diagnosis?: string;
  prescription?: string;
  notes?: string;
  requested_exams?: string;
  exam_results?: string;
  reason_for_visit?: string;
  payment_method?: string;
  consultation_fee?: string;
}

export { ICreateMedicalConsultationDTO };
