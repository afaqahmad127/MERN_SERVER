const environment = {
	port: process.env.PORT || 2023,
	nodeEnv: process.env.NODE_ENV || 'development',
	mongodbUri: process.env.DB_URI || 'mongodb://0.0.0.0:27017/MERN-TASK',
	jwtSecret: process.env.JWT_SECRET || "'secret",
};

export default environment;
