class Client {
  id: number;
  name: string;
  phone: string;
  email: string;
  cpf: string;
  birthday: Date;
  password: string;
  CRM: string;
  specialty: string;

  constructor(
    id: number,
    name: string,
    phone: string,
    email: string,
    cpf: string,
    birthday: Date,
    password: string,
    CRM: string,
    specialty: string
  ) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.cpf = cpf;
    this.birthday = birthday;
    this.password = password;
    this.CRM = CRM;
    this.specialty = specialty;
  }

  getClientDetails(): string {
    return `Client ${this.name} (CRM: ${this.CRM}) is specialized in ${this.specialty}.`;
  }
}

export { Client };
