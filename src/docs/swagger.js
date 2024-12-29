// src/docs/swagger.js

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'ClickHouse API',
    version: '1.0.0',
    description: 'API Documentation for ClickHouse Integration',
  },
  servers: [
    {
      url: 'http://localhost:3001/api',
      description: 'Development server',
    },
  ],
};

// Options for swagger-jsdoc
const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: [path.join(__dirname, '../../routes.js')],
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Function to set up Swagger UI
const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
