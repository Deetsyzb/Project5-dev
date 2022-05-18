import { Schema, model } from 'mongoose';

const messagesSchema = new Schema(
	{
		userID: Number,
		storyID: Number,
		content: String,
	},
	{ timestamps: true }
);

module.exports = model('User', messagesSchema);
