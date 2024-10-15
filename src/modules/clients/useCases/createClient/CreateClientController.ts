import { Response, Request } from 'express';
import { z } from 'zod';
import { CreateClientUseCase } from './CreateClientUseCase';

const createClientSchema = z.object({
  user_type: z.string().min(1, { message: 'O tipo do usuário é obrigatório' }),
  name: z.string().min(1, { message: 'Nome é obrigatório' }),
  phone: z
    .string()
    .min(10, { message: 'Telefone deve ter mais de 10 caracteres' }),
  email: z.string().email({ message: 'Formato do email é invalido' }),
  cpf: z.string().min(11, { message: 'CPF deve ter mais de 11 digitos' }),
  birthday: z.coerce.date({ message: 'Formato de data invalido' }), // Zod converte para objeto Date
  password: z
    .string()
    .min(6, { message: 'A senha deve ter mais de 10 caracteres' }),
  CRM: z.string().min(1, { message: 'CRM é obrigatório' }),
  specialty: z.string().min(1, { message: 'Especialidadede é obrigatorio' }),
});

class CreateClientController {
  constructor(private createClientUseCase: CreateClientUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const validatedData = createClientSchema.parse(request.body);

      const client = await this.createClientUseCase.execute(validatedData);

      return response.status(201).json(client);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return response.status(400).json({ errors: error.errors });
      }

      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}

export { CreateClientController };
