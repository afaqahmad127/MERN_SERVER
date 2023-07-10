import Joi from 'joi';

export const signUp = {
	body: Joi.object().keys({
		name: Joi.string().min(4).required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(5).required(),
	}),
};

export const update = {
	params: Joi.object().keys({
		id: Joi.string().required(),
	}),
	body: Joi.object().keys({
		personal_name: Joi.string(),
		company_name: Joi.string(),
		email: Joi.string(),
	}),
};

export const login = {
	body: Joi.object().keys({
		email: Joi.string().email().required(),
		password: Joi.string().required(),
	}),
};
