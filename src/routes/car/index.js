import express from 'express';
import { validate } from '../../middleware/index.js';
import { createCar, deleteCar, updateCar } from '../../validation/index.js';
import { controllers } from './controllers.js';

export const carRoute = express.Router();
carRoute
	.route('/')
	.get(controllers.read)
	.post(validate(createCar), controllers.create);
carRoute
	.route('/:id')
	.patch(validate(updateCar), controllers.update)
	.delete(validate(deleteCar), controllers.delete);

export * from './controllers.js';
