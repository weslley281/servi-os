import { Response, Request } from 'express';
import { CreateDoctorUseCase } from './CreateDoctorUseCase';

class CreateDoctorController {
  constructor(private createDoctorUseCase: CreateDoctorUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, phone, email, cpf, birthday, password, CRM, specialty } =
        request.body;

      const doctor = await this.createDoctorUseCase.execute({
        name,
        phone,
        email,
        cpf,
        birthday,
        password,
        CRM,
        specialty,
      });

      return response.status(201).json(doctor);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateDoctorController };
