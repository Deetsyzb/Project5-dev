import { Schema, model } from 'mongoose';

const messagesSchema: Schema = new Schema(
	{
		userID: Number,
		storyID: Number,
		content: String,
	},
	{ timestamps: true }
);

export default model('Message', messagesSchema);
