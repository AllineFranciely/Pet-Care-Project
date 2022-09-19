import { Router } from 'express';
import UserController from '../controllers/users.controller';
import validationUser from '../middlewares/users.middleware';

const router = Router();

const userController = new UserController();

router.get('/users', userController.getAll);
router.post('/users/', validationUser, userController.create);

export default router;