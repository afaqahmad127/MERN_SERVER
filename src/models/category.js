import mongoose from 'mongoose';

// category schema
const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
});

export const Category = mongoose.model('Category', categorySchema);
