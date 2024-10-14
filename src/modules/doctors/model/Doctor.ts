class Doctor {
  id: number;
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
    id: number,
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
    this.id = id;
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
