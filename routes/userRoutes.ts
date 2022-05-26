import { Router } from 'express';

const userRouter = Router();

type NewType = {
	controller: any;
};

export default function ({ controller }: NewType) {
	userRouter.post('/login', controller.logIn.bind(controller));
	userRouter.post('/signup', controller.signUp.bind(controller));

	return userRouter;
};
