import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
	name: {
		type: String,
		requied: true,
		unique: true,
	},
	ingredients: [
		{
			type: String,
			requied: true,
		},
	],
	instructions: {
		type: String,
		requied: true,
	},
	imageUrl: {
		type: String,
		requied: true,
	},
	cookingTime: {
		type: Number,
		requied: true,
	},
	userOwner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
		requied: true,
	},
});

export const RecipeModel = mongoose.model('recipies', RecipeSchema);
