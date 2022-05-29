import BaseController from './baseController';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserController extends BaseController {
	/** Returns a token and the userId to the FE if log in is successful
	 * @param {string} email
	 * @param {string} password
	 */
	async logIn(req: { body: { email: any; password: any; }; }, res: { send: any; }) {
		console.log('logging in');
		const { email, password } = req.body;
		console.log('email', email);
		const user = await this.model.findOne({ email });
		try {
			if (!user) {
				res.send('The email or password is incorrect');
			} else {
				// salts and hashes the first password,
				// then compare with the hashed password from the db to make sure that they are the same.
				// If they are, return true, else return false.
				const logInSuccess = await bcrypt.compare(password, user.password);

				if (!logInSuccess) {
					res.send('The email or password is incorrect');
					return;
				}
				const payload = {
					_id: user.id,
					name: user.name,
					address: user.address,
				};
				const token = jwt.sign(payload, this.salt, { expiresIn: '6h' });
				console.log(user);
				res.send({ token, userId: user.id, success: true });
			}
		} catch (err) {
			this.errorHandler(err, res);
		}
	}
}
export default UserController