interface ICreateDoctorDTO {
  id?: number;
  name: string;
  phone: string;
  email: string;
  cpf: string;
  birthday: Date;
  password: string;
  CRM: string;
  specialty: string;
}

export { ICreateDoctorDTO };
