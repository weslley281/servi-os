interface ICreateDoctorDTO {
  user_id?: number;
  user_type: string;
  name: string;
  phone: string;
  email: string;
  CPF: string;
  birthday: Date;
  password?: string;
  CRM: string;
  specialty: string;
}

export { ICreateDoctorDTO };
