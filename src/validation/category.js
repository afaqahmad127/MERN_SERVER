import Joi from 'joi';

export const createCategory = {
	body: Joi.object().keys({
		name: Joi.string().required(),
	}),
};

export const updateCategory = {
	params: Joi.object().keys({
		id: Joi.string()
			.regex(/^[0-9a-fA-F]{24}$/)
			.required(),
	}),
	body: Joi.object().keys({
		name: Joi.string().optional(),
	}),
};

export const deleteCategory = {
	params: Joi.object().keys({
		id: Joi.string()
			.regex(/^[0-9a-fA-F]{24}$/)
			.required(),
	}),
};
