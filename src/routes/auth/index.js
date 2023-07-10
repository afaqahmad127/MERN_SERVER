import express from 'express';
import { validate } from '../../middleware/index.js';
import { login, signUp } from '../../validation/index.js';
import { controllers } from './controllers.js';

export const authRoute = express.Router();
authRoute.post('/signup', validate(signUp), controllers.signUp);
authRoute.post('/login', validate(login), controllers.login);

export * from './controllers.js';
