// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup and start server
const port = 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

// setup GET route endpoint
app.get('/all', (req, res) => {
  res.send(projectData);
})

// setup POST route endpoint
app.post('/add', (req, res) => {
  const newData = {
    date: req.body.date,
    temp: req.body.main.temp,
    feelings: req.body.feelings
  };
  projectData = newData;
})