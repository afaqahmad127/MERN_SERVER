import { categoryService } from '../../services/index.js';
import { httpResponse } from '../../utils/index.js';

export const controllers = {
	create: async (req, res) => {
		try {
			return httpResponse.CREATED(res, await categoryService.create(req.body));
		} catch (err) {
			return httpResponse.INTERNAL_SERVER(res, err.message);
		}
	},
	read: async (req, res) => {
		try {
			return httpResponse.SUCCESS(res, await categoryService.read());
		} catch (err) {
			return httpResponse.INTERNAL_SERVER(res, err.message);
		}
	},
	update: async (req, res) => {
		try {
			console.log(req.body);
			return httpResponse.SUCCESS(
				res,
				await categoryService.update(req.params.id, req.body)
			);
		} catch (err) {
			return httpResponse.INTERNAL_SERVER(res, err.message);
		}
	},
	delete: async (req, res) => {
		try {
			return httpResponse.SUCCESS(
				res,
				await categoryService.delete(req.params.id)
			);
		} catch (err) {
			return httpResponse.INTERNAL_SERVER(res, err.message);
		}
	},
};
