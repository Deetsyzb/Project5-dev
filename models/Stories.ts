import { Schema, model } from 'mongoose';

const storiesSchema: Schema = new Schema(
	{
		creatorID: Number,
		title: String,
		content: String,
	},

	{ timestamps: true }
);

export default model('Story', storiesSchema);
