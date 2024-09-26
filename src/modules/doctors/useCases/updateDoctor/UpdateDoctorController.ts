import { Request, Response } from 'express';
import { UpdateDoctorUseCase } from './UpdateDoctorUseCase';

class UpdateDoctorController {
  constructor(private updateDoctorUseCase: UpdateDoctorUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      // Validação simples dos parâmetros obrigatórios
      const { id, name, phone, email, birthday, cpf, CRM, specialty } = request.body;

      if (!id || !name || !phone || !email || !birthday || !cpf || !CRM || !specialty) {
        return response.status(400).json({ error: 'Todos os campos são obrigatórios' });
      }

      // Chama o caso de uso para atualizar o médico
      const doctor = await this.updateDoctorUseCase.execute({
        id, name, phone, email, birthday, cpf, CRM, specialty
      });

      return response.status(200).json(doctor);
    } catch (error: any) {
      // Erro específico se o médico não for encontrado
      if (error.message === 'O doutor não existe') {
        return response.status(404).json({ error: error.message });
      }

      // Qualquer outro erro é tratado como erro do servidor
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}

export { UpdateDoctorController };
