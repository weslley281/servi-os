import { Request, Response } from 'express';
import { z } from 'zod'; // Importa a biblioteca Zod
import { UpdateDoctorUseCase } from './UpdateDoctorUseCase';

// Define o esquema de validação usando Zod
const updateDoctorSchema = z.object({
  user_id: z.number().int(),
  user_type: z.string().min(1, { message: "O tipo de usuário é obrigatório" }),
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  phone: z.string().min(10, { message: "Telefone deve ter mais de 10 caracteres" }),
  email: z.string().email({ message: "Formato do email é invalido" }),
  CPF: z.string().min(11, { message: "CPF deve ter mais de 11 digitos" }),
  birthday: z.coerce.date({ message: "Formato de data invalido" }),
  CRM: z.string().min(1, { message: "CRM é obrigatório" }),
  specialty: z.string().min(1, { message: "Especialidadede é obrigatorio" }),
});

class UpdateDoctorController {
  constructor(private updateDoctorUseCase: UpdateDoctorUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      // Validação dos dados do corpo da requisição
      const validatedData = updateDoctorSchema.parse(request.body);

      // Chama o caso de uso para atualizar o médico com os dados validados
      const doctor = await this.updateDoctorUseCase.execute(validatedData);

      return response.status(200).json(doctor);
    } catch (error: any) {
      // Se a validação falhar, retorna um erro de validação
      if (error instanceof z.ZodError) {
        return response.status(400).json({ error: error.errors });
      }

      // Erro específico se o médico não for encontrado
      if (error.message === 'Doctor not exists') {
        return response.status(404).json({ error: error.message });
      }

      // Qualquer outro erro é tratado como erro do servidor
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}

export { UpdateDoctorController };
