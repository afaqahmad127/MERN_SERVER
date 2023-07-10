import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const carSchema = new Schema({
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: true,
	},
	color: {
		type: String,
		required: true,
	},
	model: {
		type: String,
		required: true,
	},
	make: {
		type: String,
		required: true,
	},
	registrationNo: {
		type: String,
		required: true,
		unique: true,
	},
});

export const Car = mongoose.model('Car', carSchema);
