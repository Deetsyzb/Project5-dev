import { Router } from 'express';

const userRouter = Router();

export default (controller) => {
	userRouter.post('/login', controller.logIn.bind(controller));
	userRouter.post('/signup', controller.signUp.bind(controller));

	return userRouter;
};
