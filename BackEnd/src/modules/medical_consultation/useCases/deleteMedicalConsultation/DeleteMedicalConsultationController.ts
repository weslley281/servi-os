import { Response, Request } from 'express';
import { z } from 'zod';
import { DeleteMedicalConsultationUseCase } from './DeleteMedicalConsultationUseCase';

// Define o esquema de validação para o ID do médico
const deleteMedicalConsultationSchema = z.object({
  m_consultation_id: z.number().int(),
});

class DeleteMedicalConsultationController {
  constructor(private deleteMedicalConsultationUseCase: DeleteMedicalConsultationUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      // Valida o parâmetro medicalconsultation_id
      const { m_consultation_id } = deleteMedicalConsultationSchema.parse(request.params);

      // Chama o caso de uso para deletar o médico
      await this.deleteMedicalConsultationUseCase.execute({ m_consultation_id });

      return response.status(204).send(); // Retorna 204 No Content após a exclusão
    } catch (error: any) {
      // Se a validação falhar, retorna os erros detalhados
      if (error instanceof z.ZodError) {
        return response.status(400).json({ errors: error.errors });
      }

      // Se o médico não for encontrado, trata como erro 404
      if (error.message === 'MedicalConsultation not found') {
        return response.status(404).json({ error: error.message });
      }

      // Qualquer outro erro é tratado como erro genérico
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}

export { DeleteMedicalConsultationController };
