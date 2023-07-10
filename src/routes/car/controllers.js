import ErrorCodes from '../../constants/error-codes.js';
import { carService } from '../../services/index.js';
import { httpResponse } from '../../utils/index.js';

export const controllers = {
	create: async (req, res) => {
		try {
			return httpResponse.SUCCESS(res, await carService.create(req.body));
		} catch (err) {
			if (err.message === ErrorCodes.BAD_REQUEST) {
				return httpResponse.BAD_REQUEST(res, 'Category does not exit!');
			} else {
				return httpResponse.INTERNAL_SERVER(res, err.message);
			}
		}
	},
	read: async (req, res) => {
		try {
			return httpResponse.SUCCESS(res, await carService.read());
		} catch (err) {
			return httpResponse.INTERNAL_SERVER(res, err.message);
		}
	},
	update: async (req, res) => {
		try {
			return httpResponse.SUCCESS(
				res,
				await carService.update(req.params.id, req.body)
			);
		} catch (err) {
			return httpResponse.INTERNAL_SERVER(res, err.message);
		}
	},
	delete: async (req, res) => {
		try {
			return httpResponse.SUCCESS(res, await carService.delete(req.params.id));
		} catch (err) {
			return httpResponse.INTERNAL_SERVER(res, err.message);
		}
	},
};
