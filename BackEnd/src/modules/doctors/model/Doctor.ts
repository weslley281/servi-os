class Doctor {
  user_id: number;
  user_type: string;
  name: string;
  phone: string;
  email: string;
  CPF: string;
  birthday: Date;
  password: string;
  CRM: string;
  specialty: string;

  constructor(
    user_id: number,
    user_type: string,
    name: string,
    phone: string,
    email: string,
    CPF: string,
    birthday: Date,
    password: string,
    CRM: string,
    specialty: string
  ) {
    this.user_id = user_id;
    this.user_type = user_type
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.CPF = CPF;
    this.birthday = birthday;
    this.password = password;
    this.CRM = CRM;
    this.specialty = specialty;
  }

  getDoctorDetails(): string {
    return `Doctor ${this.name} (CRM: ${this.CRM}) is specialized in ${this.specialty}.`;
  }
}

export { Doctor };
