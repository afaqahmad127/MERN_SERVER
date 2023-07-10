import express from 'express';
import { validate } from '../../middleware/index.js';
import {
	createCategory,
	deleteCategory,
	updateCategory,
} from '../../validation/index.js';
import { controllers } from './controllers.js';

export const categoryRoute = express.Router();
categoryRoute
	.route('/')
	.get(controllers.read)
	.post(validate(createCategory), controllers.create);
categoryRoute
	.route('/:id')
	.patch(validate(updateCategory), controllers.update)
	.delete(validate(deleteCategory), controllers.delete);

export * from './controllers.js';
