import { Request, Response } from 'express';
import { z } from 'zod'; // Importa a biblioteca Zod
import { UpdateMedicalConsultationUseCase } from './UpdateMedicalConsultationUseCase';

// Define o esquema de validação usando Zod
const updateMedicalConsultationSchema = z.object({
  m_consultation_id: z.number().int(),
  appointment_date: z.coerce.date({ message: 'Formato de data invalido' }),
  status: z.string().min(1, { message: 'Status é obrigatório' }),
  doctor_id: z.number().int(),
  client_id: z.number().int(),
});

class UpdateMedicalConsultationController {
  constructor(
    private updateMedicalConsultationUseCase: UpdateMedicalConsultationUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      // Validação dos dados do corpo da requisição
      const validatedData = updateMedicalConsultationSchema.parse(request.body);

      // Chama o caso de uso para atualizar o médico com os dados validados
      const medicalconsultation =
        await this.updateMedicalConsultationUseCase.execute(validatedData);

      return response.status(200).json(medicalconsultation);
    } catch (error: any) {
      // Se a validação falhar, retorna um erro de validação
      if (error instanceof z.ZodError) {
        return response.status(400).json({ error: error.errors });
      }

      // Erro específico se o médico não for encontrado
      if (error.message === 'MedicalConsultation not exists') {
        return response.status(404).json({ error: error.message });
      }

      // Qualquer outro erro é tratado como erro do servidor
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}

export { UpdateMedicalConsultationController };
