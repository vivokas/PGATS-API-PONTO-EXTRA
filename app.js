const express = require('express');
const userController = require('./controller/userController');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
app.use(express.json());

// Swagger 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Endpoints
app.post('/api/v1/register', userController.register);
app.post('/api/v1/login', userController.login);

module.exports = app;
