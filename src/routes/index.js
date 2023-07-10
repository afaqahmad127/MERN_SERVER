import express from 'express';

// routes
import { authRoute } from './auth/index.js';
import { carRoute } from './car/index.js';
import { categoryRoute } from './category/index.js';

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes
protectedRouter.use('/category', categoryRoute);
protectedRouter.use('/car', carRoute);

// Un-Protected Routes
unProtectedRouter.use('/auth', authRoute);

export { protectedRouter, unProtectedRouter };
