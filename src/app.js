const express = require('express');
const visitRoutes = require('./routes/visitRoutes');
const errorHandler = require('./utils/errorHandler');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');
const YAML = require('yaml');
const app = express();

app.use(express.json());
app.use('/api/visits', visitRoutes);
app.use(errorHandler);

const apiDocumentation = YAML.parse(fs.readFileSync(path.join(__dirname, '../docs/api.yaml'), 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation));
module.exports = app;
