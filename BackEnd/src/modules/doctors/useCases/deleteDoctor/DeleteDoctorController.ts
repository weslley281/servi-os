import { Response, Request } from 'express';
import { z } from 'zod';
import { DeleteDoctorUseCase } from './DeleteDoctorUseCase';

// Define o esquema de validação para o ID do médico
const deleteDoctorSchema = z.object({
  user_id: z.number().int(),
});

class DeleteDoctorController {
  constructor(private deleteDoctorUseCase: DeleteDoctorUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      // Valida o parâmetro doctor_id
      const { user_id } = deleteDoctorSchema.parse(request.params);
      const id = Number(user_id);

      // Chama o caso de uso para deletar o médico
      await this.deleteDoctorUseCase.execute({ user_id });

      return response.status(204).send(); // Retorna 204 No Content após a exclusão
    } catch (error: any) {
      // Se a validação falhar, retorna os erros detalhados
      if (error instanceof z.ZodError) {
        return response.status(400).json({ errors: error.errors });
      }

      // Se o médico não for encontrado, trata como erro 404
      if (error.message === 'Doctor not found') {
        return response.status(404).json({ error: error.message });
      }

      // Qualquer outro erro é tratado como erro genérico
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}

export { DeleteDoctorController };
