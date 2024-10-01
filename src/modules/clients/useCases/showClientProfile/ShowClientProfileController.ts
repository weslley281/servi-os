import { Request, Response } from 'express';
import { ShowClientProfileUseCase } from './ShowClientProfileUseCase';

class ShowClientProfileController {
  constructor(private showClientProfileUseCase: ShowClientProfileUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { client_id } = request.params;
      const id = Number(client_id);

      const client = await this.showClientProfileUseCase.execute({
        client_id: id,
      });

      return response.status(200).json(client);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ShowClientProfileController };
