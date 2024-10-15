import { Response, Request } from 'express';
import { z } from 'zod';
import { CreateMedicalConsultationUseCase } from './CreateMedicalConsultationUseCase';

const createMedicalConsultationSchema = z.object({
  appointment_date: z.coerce.date({ message: 'Formato de data invalido' }),
  status: z.string().min(1, { message: 'Status é obrigatório' }),
  doctor_id: z.number().int(),
  client_id: z.number().int(),
});

class CreateMedicalConsultationController {
  constructor(
    private createMedicalConsultationUseCase: CreateMedicalConsultationUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const validatedData = createMedicalConsultationSchema.parse(request.body);

      const medicalconsultation =
        await this.createMedicalConsultationUseCase.execute(validatedData);

      return response.status(201).json(medicalconsultation);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return response.status(400).json({ errors: error.errors });
      }

      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}

export { CreateMedicalConsultationController };
