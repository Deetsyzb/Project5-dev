import { Router } from 'express';
import UserController from '../controllers/userController';

const router: Router = Router();

// router.post('/hello', UserController.helloworld)
router.post('/login', UserController.login);


export default router;
