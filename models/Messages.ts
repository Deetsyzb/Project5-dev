import { Schema, model } from 'mongoose';

const messagesSchema = new Schema(
	{
		userID: Number,
		storyID: Number,
		content: String,
	},
	{ timestamps: true }
);

export default model('Message', messagesSchema);
