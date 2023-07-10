import { Car } from '../models/index.js';

export const carService = {
	create: async (data) => {
		try {
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
