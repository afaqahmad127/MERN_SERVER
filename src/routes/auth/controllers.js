import { ErrorCodes, ErrorCodesMeta } from '../../constants/index.js';
import { authService } from '../../services/index.js';
import { httpResponse } from '../../utils/index.js';

export const controllers = {
	signUp: async (req, res) => {
		try {
			return httpResponse.CREATED(res, await authService.save(req.body));
		} catch (err) {
			if (err.message === ErrorCodes.USER_NOT_EXISTS_WITH_THIS_EMAIL) {
				return httpResponse.CONFLICT(
					res,
					ErrorCodesMeta.USER_NOT_EXISTS_WITH_THIS_EMAIL.message
				);
			} else {
				return httpResponse.INTERNAL_SERVER(res, err.message);
			}
		}
	},
	login: async (req, res) => {
		try {
			return httpResponse.SUCCESS(res, await authService.login(req.body));
		} catch (err) {
			if (err.message === ErrorCodes.USER_NOT_EXISTS_WITH_THIS_EMAIL) {
				return httpResponse.NOT_FOUND(
					res,
					ErrorCodesMeta.USER_NOT_EXISTS_WITH_THIS_EMAIL.message
				);
			} else if (err.message === ErrorCodes.YOUR_PASSWORD_IS_INCORRECT) {
				return httpResponse.NOT_FOUND(
					res,
					ErrorCodesMeta.YOUR_PASSWORD_IS_INCORRECT.message
				);
			} else {
				return httpResponse.INTERNAL_SERVER(res, err.message);
			}
		}
	},
};
