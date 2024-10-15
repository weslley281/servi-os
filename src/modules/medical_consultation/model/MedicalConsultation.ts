class MedicalConsultation {
  m_consultation_id: number;
  appointment_date: string;
  duration: number;
  status: string;
  doctor_id: number;
  client_id: number;
  reported_symptoms: string;
  diagnosis: string;
  prescription: string;
  notes: string;
  requested_exams: string;
  exam_results: string;
  reason_for_visit: string;
  payment_method: string;
  consultation_fee: string;

  constructor(
    m_consultation_id: number,
    appointment_date: string,
    duration: number,
    status: string,
    doctor_id: number,
    client_id: number,
    reported_symptoms: string,
    diagnosis: string,
    prescription: string,
    notes: string,
    requested_exams: string,
    exam_results: string,
    reason_for_visit: string,
    payment_method: string,
    consultation_fee: string
  ) {
    (this.m_consultation_id = m_consultation_id),
      (this.appointment_date = appointment_date),
      (this.duration = duration),
      (this.status = status),
      (this.doctor_id = doctor_id),
      (this.client_id = client_id),
      (this.reported_symptoms = reported_symptoms),
      (this.diagnosis = diagnosis),
      (this.prescription = prescription),
      (this.notes = notes),
      (this.requested_exams = requested_exams),
      (this.exam_results = exam_results),
      (this.reason_for_visit = reason_for_visit),
      (this.payment_method = payment_method),
      (this.consultation_fee = consultation_fee);
  }

  getMedicalConsultationDetails(): string {
    return `MedicalConsultation ${this.doctor_id} for ${this.client_id}.`;
  }
}

export { MedicalConsultation };
