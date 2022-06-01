import { Router } from 'express';
import UserController from '../controllers/userController';
import StoryController from '../controllers/storyController';

const router: Router = Router();

// router.post('/hello', UserController.helloworld)
router.post('/login', UserController.login);

router.post('/save', StoryController.save)

export default router;
