const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const eventRoutes = require('./src/js/Routes/event-routes');

// tells dotenv to look for env config files and make them readable
dotenv.config();

// Connect to Mongodb
let mongodbAddress = process.env.mongodbUrl;
mongoose.connect(mongodbAddress, {useNewUrlParser: true})
.then(() => console.log('Connected to mongodb server'))
.catch(err => console.log('Failed to connect to mongodb server.', err));
// TODO: set collection name so it doesn't default to "test"

app.use(bodyParser.json());

// Use event routes to handle API calls
app.use('/api/', eventRoutes);

app.listen(port, () => {
  console.log('Server started listening on port ', port);
});