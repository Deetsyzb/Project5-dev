import { Schema, model } from 'mongoose';

const userSchema = new Schema(
	{
		username: String,
		email: {
			type: String,
			lowercase: true,
			required: true,
			unique: true,
			trim: true,
			match: /.+\@.+\..+/,
		},
		password: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = model('User', userSchema);
