import { Schema, model } from 'mongoose';

const storiesSchema: Schema = new Schema(
	{
		creatorID: Number,
		content: String,
	},

	{ timestamps: true }
);

export default model('Story', storiesSchema);
