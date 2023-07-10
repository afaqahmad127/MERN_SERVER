import { ErrorCodes } from '../constants/index.js';
import { User } from '../models/index.js';
import { bCryptService } from './bcrypt.js';
import { jwtService } from './jwt.js';

export const authService = {
	save: async (data) => {
		try {
			const user = await authService.getUser({ email: data.email });
			if (user) {
				throw new Error(ErrorCodes.USER_NOT_EXISTS_WITH_THIS_EMAIL);
			}
			return await new User(data).save();
		} catch (e) {
			throw new Error(e.message);
		}
	},
	login: async (data) => {
		const user = await authService.getUser({ email: data.email });
		if (!user) {
			throw new Error(ErrorCodes.USER_NOT_EXISTS_WITH_THIS_EMAIL);
		}
		if (!(await bCryptService.compare(data.password, user.password))) {
			throw new Error(ErrorCodes.YOUR_PASSWORD_IS_INCORRECT);
		}
		return { user, token: jwtService.signIn(user._doc ?? {}) };
	},
	getUser: async (data) => {
		try {
			return await User.findOne(data);
		} catch (e) {
			throw new Error(e.message);
		}
	},
};
