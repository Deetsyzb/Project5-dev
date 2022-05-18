import { Schema, model } from 'mongoose';

const storiesSchema = new Schema(
	{
		creatorID: Number,
		content: String,
	},

	{ timestamps: true }
);

module.exports = model('User', storiesSchema);
