import { Schema, model } from 'mongoose';

const storiesSchema = new Schema(
	{
		creatorID: Number,
		content: String,
	},

	{ timestamps: true }
);

export default model('Story', storiesSchema);
