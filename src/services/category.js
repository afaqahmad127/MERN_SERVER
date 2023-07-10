import { Category } from '../models/index.js';

export const categoryService = {
	create: async (data) => {
		try {
			return await new Category(data).save();
		} catch (err) {
			throw new Error(err.message);
		}
	},
	read: async () => {
		try {
			return await Category.find();
		} catch (err) {
			throw new Error(err.message);
		}
	},
	update: async (id, data) => {
		try {
			return await Category.updateOne(
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
			return await Category.deleteOne({ _id: id }, { returnOriginal: true });
		} catch (err) {
			throw new Error(err.message);
		}
	},
};
