import mongoose from 'mongoose';
import { bCryptService } from '../services/index.js';
const Schema = mongoose.Schema;
const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

userSchema.pre('save', async function (next) {
	this.password = await bCryptService.encrypt(this.password);
	this.email = this.email.toLowerCase();
	next();
});
export const User = mongoose.model('User', userSchema);
