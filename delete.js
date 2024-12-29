const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = 3001;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', routes);

app.get("/", (req, res) =>{
    res.json("server ruuning.");
});
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
