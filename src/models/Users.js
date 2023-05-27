import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		requied: true,
		unique: true,
	},
	password: {
		type: String,
		requied: true,
	},
	savedRecipes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'recipes',
		},
	],
});

export const UserModel = mongoose.model('users', UserSchema);
