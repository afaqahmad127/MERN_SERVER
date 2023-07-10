import ErrorCodes from '../constants/error-codes.js';
import { Car } from '../models/index.js';
import { categoryService } from './category.js';

export const carService = {
	create: async (data) => {
		try {
			const category = await categoryService.getOne({ _id: data.category });
			if (!category) {
				throw new Error(ErrorCodes.BAD_REQUEST);
			}
			return await new Car(data).save();
		} catch (err) {
			throw new Error(err.message);
		}
	},
	read: async () => {
		try {
			return await Car.find().populate('category');
		} catch (err) {
			throw new Error(err.message);
		}
	},
	update: async (id, data) => {
		try {
			return await Car.updateOne(
				{ _id: id },
				{ $set: data },
				{ returnOriginal: true }
			);
		} catch (err) {
			throw new Error(err.message);
		}
	},
	delete: async (id) => {
		try {
			return await Car.deleteOne({ _id: id }, { returnOriginal: true });
		} catch (err) {
			throw new Error(err.message);
		}
	},
};
