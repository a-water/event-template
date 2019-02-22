const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// tells dotenv to look for env config files and make them readable
dotenv.config();

// Connect to Mongodb
let mongodbAddress = process.env.mongodbUrl;
mongoose.connect(mongodbAddress, {useNewUrlParser: true})
.then(() => console.log('Connected to mongodb server'))
.catch(err => console.log('Failed to connect to mongodb server.', err));

// TODO: set collection name so it doesn't default to "test"

let Event = require('./src/js/DB/Event');

app.use(bodyParser.json());

app.post('/api/createEvent', (req, res) => {
  console.log('Create Event:', req.body);
  if(!req.body || !req.body.eventName || req.body.eventName === '') {
    throw new Error("Failed to get legit event data");
  }
  
  let newEvent = Event({
    title: req.body.eventName,
    attendees: ["bob", "greg", "brad"]
  });
  
  newEvent.save()
  .then(event => {
    res.status(200).send({"Event name": req.body.eventName});
  })
  .catch(err => {
    res.status(404).json(err)
  });
  
});

app.get('/api/retrieveEvent', (req, res) => {
  console.log('Retrieve Event', req.query);
  // TODO: validate request

  Event.findOne({ _id: req.query.eventId })
    .then(events => {
      console.log('Event found:', events);
      res.status(200).json(events);
    })
    .catch(err => {
      console.log('Error find event:', err);
      res.status(404).json(err);
    });
});

app.get('/api/retrieveEvents', (req, res) => {
  console.log('Retrieve Events', req.query);
  // TODO: validate request

  Event.find()
    .then(events => {
      console.log('Events found:', events);
      res.status(200).json(events);
    })
    .catch(err => {
      console.log('Error find events:', err);
      res.status(404).json(err);
    });  
});

app.post('/api/updateEvent', (req, res) => {
  console.log('Update Event', req.body.id);
  // TODO: validate request

  Event.findOneAndUpdate({ _id: req.body.id }, { $set:{attendees: req.body.attendees}}, { new: true })
    .then(document => {
      res.status(200).json(document);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

app.listen(port, () => {
  console.log('Server started listening on port ', port);
});