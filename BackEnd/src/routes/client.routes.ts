import { Router } from 'express';
import { showClientProfileController } from '../modules/clients/useCases/showClientProfile';
import { createClientController } from '../modules/clients/useCases/createClient';
import { deleteClientController } from '../modules/clients/useCases/deleteClient';
import { updateClientController } from '../modules/clients/useCases/updateClient';

const clientRoutes = Router();

clientRoutes.post('/', (request, response) => {
  return createClientController.handle(request, response);
});

clientRoutes.get('/:client_id', (request, response) => {
  return showClientProfileController.handle(request, response);
});

clientRoutes.put('/', (request, response) => {
  return updateClientController.handle(request, response);
});

clientRoutes.delete('/client_id', (request, response) => {
  return deleteClientController.handle(request, response);
});




export { clientRoutes };
