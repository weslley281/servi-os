import { Response, Request } from 'express';
import { z } from 'zod'; // Importa a biblioteca Zod
import { CreateDoctorUseCase } from './CreateDoctorUseCase';

// Define o esquema de validação usando Zod
const createDoctorSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  phone: z.string().min(10, { message: "Telefone deve ter mais de 10 caracteres" }),
  email: z.string().email({ message: "Formato do email é invalido" }),
  cpf: z.string().min(11, { message: "CPF deve ter mais de 11 digitos" }),
  birthday: z.coerce.date({ message: "Formato de data invalido" }), // Zod converte para objeto Date
  password: z.string().min(6, { message: "A senha deve ter mais de 10 caracteres" }),
  CRM: z.string().min(1, { message: "CRM é obrigatório" }),
  specialty: z.string().min(1, { message: "Especialidadede é obrigatorio" }),
});

class CreateDoctorController {
  constructor(private createDoctorUseCase: CreateDoctorUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      // Valida os dados de entrada do corpo da requisição usando Zod
      const validatedData = createDoctorSchema.parse(request.body);

      // Chama o caso de uso para criar o médico com os dados validados
      const doctor = await this.createDoctorUseCase.execute(validatedData);

      return response.status(201).json(doctor);
    } catch (error: any) {
      // Se a validação com Zod falhar, retorna os erros detalhados
      if (error instanceof z.ZodError) {
        return response.status(400).json({ errors: error.errors });
      }

      // Qualquer outro erro é tratado como erro genérico
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}

export { CreateDoctorController };
