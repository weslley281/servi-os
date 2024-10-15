import { Request, Response } from 'express';
import { ShowDoctorProfileUseCase } from './ShowDoctorProfileUseCase';

class ShowDoctorProfileController {
  constructor(private showDoctorProfileUseCase: ShowDoctorProfileUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { doctor_id } = request.params;
      const id = Number(doctor_id);

      const doctor = await this.showDoctorProfileUseCase.execute({ doctor_id: id });

      return response.status(200).json(doctor);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ShowDoctorProfileController };