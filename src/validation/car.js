import Joi from 'joi';

export const createCar = {
	body: Joi.object().keys({
		category: Joi.string()
			.regex(/^[0-9a-fA-F]{24}$/)
			.required(),
		color: Joi.string().required(),
		model: Joi.string().required(),
		make: Joi.string().required(),
		registrationNo: Joi.string().required(),
	}),
};

export const updateCar = {
	params: Joi.object().keys({
		id: Joi.string()
			.regex(/^[0-9a-fA-F]{24}$/)
			.required(),
	}),
	body: Joi.object()
		.keys({
			category: Joi.string()
				.regex(/^[0-9a-fA-F]{24}$/)
				.optional(),
			color: Joi.string().optional(),
			model: Joi.string().optional(),
			make: Joi.string().optional(),
			registrationNo: Joi.string().optional(),
		})
		.required(),
};

export const deleteCar = {
	params: Joi.object().keys({
		id: Joi.string()
			.regex(/^[0-9a-fA-F]{24}$/)
			.required(),
	}),
};
