import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

import { createConnectionDataBase } from './database/db';
import { createTableUser } from './database/models/userModel';
import { createTableMedicalConsultation } from './database/models/medicalConsultationModel';

import { doctorRoutes } from './routes/doctor.routes';
import { clientRoutes } from './routes/client.routes';

createConnectionDataBase();
createTableUser();
createTableMedicalConsultation();

const app = express();

app.use(express.json());
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return;
  }
);

app.use('/doctor', doctorRoutes);
app.use('/client', clientRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export { app };
