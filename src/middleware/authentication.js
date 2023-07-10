import { ErrorCodes, ErrorCodesMeta } from '../constants/index.js';
import { jwtService } from '../services/index.js';
import { httpResponse } from '../utils/index.js';

export const authenticate = (req, res, next) => {
	try {
		const token = req.header('authorization');
		if (!token)
			return httpResponse.UNAUTHORIZED(
				res,
				ErrorCodesMeta.UNAUTHORIZED.message
			);

		const bearerToken = token.split(' ')[1];
		req.user = jwtService.verify(bearerToken.replace(/"/g, ''));
		next();
	} catch (err) {
		if (err.message === ErrorCodes.UNAUTHORIZED) {
			return httpResponse.UNAUTHORIZED(
				res,
				ErrorCodesMeta.UNAUTHORIZED.message
			);
		} else {
			return httpResponse.INTERNAL_SERVER(
				res,
				ErrorCodesMeta.INTERNAL_SERVER_ERROR.message
			);
		}
	}
};
