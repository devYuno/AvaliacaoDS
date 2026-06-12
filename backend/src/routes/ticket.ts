import express from 'express';
import TicketController from '../controllers/TicketController';
import { validateCreate, validateDelete, validateUpdate } from '../middlewares/ticketMiddleware';

const route = express.Router();

route
    .post('/create', validateCreate, TicketController.create)
    .get('/show', TicketController.show)
    .get('/show/:id', TicketController.showById)
    .put('/update/:id', validateUpdate, TicketController.update)
    .delete('/delete/:id', validateDelete, TicketController.delete)
    .patch('/start/:id', TicketController.start)
    .patch('/finish/:id', TicketController.finish)

export default route;