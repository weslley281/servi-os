interface ICreateClientDTO {
  user_id?: number;
  user_type: string;
  name: string;
  phone: string;
  email: string;
  cpf: string;
  birthday: Date;
  password?: string;
}

export { ICreateClientDTO };
