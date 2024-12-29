const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const setupSwaggerDocs = require('./src/docs/swagger.js');

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  console.log('backernd server is runong');  
  res.json('backernd server is runong');
});
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', routes);

// Setup Swagger Docs
setupSwaggerDocs(app);


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
