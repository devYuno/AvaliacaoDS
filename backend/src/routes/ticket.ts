import express from 'express';
import TicketController from '../controllers/TicketController';

const route = express.Router();

route
    .post('/create', TicketController.create)
    .get('/show', TicketController.show)
    .get('/show/:id', TicketController.showById)
    .put('/update/:id', TicketController.update)
    .delete('/delete/:id', TicketController.delete)
    .patch('/start/:id', TicketController.start)
    .patch('/finish/:id', TicketController.finish)


export default route;