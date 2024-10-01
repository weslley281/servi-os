interface ICreateClientDTO {
  id?: number;
  name: string;
  phone: string;
  email: string;
  cpf: string;
  birthday: Date;
  password?: string;
}

export { ICreateClientDTO };
