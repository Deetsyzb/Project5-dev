export default class BaseController {
    salt: string;
    model: any;
	constructor(model: any, salt: string) {
		this.model = model
		this.salt = salt;
	}

	// eslint-disable-next-line class-methods-use-this
	errorHandler = (err: unknown, res: { send: (arg0: any) => void; }) => {
		console.log('\x1b[36m%s\x1b[0m', 'Error');
		console.error('\x1b[31m%s\x1b[0m', err);
		res.send(err);
	};
}

// module.exports = BaseController;
