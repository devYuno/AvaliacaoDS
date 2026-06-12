import express from 'express';
import UserController from '../controllers/UserController';
import { validateRegister } from '../middlewares/userMiddleware';

const route = express.Router();

route
    .post('/create', validateRegister, UserController.create)
    .get('/show', UserController.show)
    .put('/update/:id', UserController.update)
    .delete('/delete/:id', UserController.delete)


export default route;