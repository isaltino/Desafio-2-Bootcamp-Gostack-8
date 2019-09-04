import { Router } from 'express';
import UserController from './app/controllers/UserController';
import Section from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const router = new Router();

router.post('/users', UserController.store);
router.post('/sessions', Section.store);

router.use(authMiddleware);

router.put('/users', UserController.update);


export default router;
