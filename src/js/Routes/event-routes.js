const express = require('express');
const router = express.Router();
const multer = require('multer');

const upload = multer({ dest: '/tmp/uploads' });
const Event = require('../DB/Event');
const csvParser = require('../csv-parser');

router.post('/createEvent', upload.single('attendeesFile'), (req, res) => {
  console.log('Create Event:', req.body);
  console.log('file info. size:', req.file.size, "path:", req.file.path);
  
 csvParser.parseAttendeeCsv(req.file.path)
  .then(parsedCsv => {
    // console.log("parsed:", parsedCsv);
    let newEvent = Event({
      title: req.body.newEventName,
      attendees: parsedCsv
    });

    newEvent.save()
    .then(event => {
      res.status(200).send({"Event name": req.body.newEventName});
    })
    .catch(err => {
      console.log('error 500', err);
      
      res.status(500).json(err)
    });
  });  
});

router.get('/retrieveEvent', (req, res) => {
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

router.get('/retrieveEvents', (req, res) => {
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

router.post('/updateEvent', (req, res) => {
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

router.delete('/deleteEvent', (req, res) => {
  console.log('Delete Event', req.query.id);
  // TODO: validate request

  Event.findOneAndDelete({ _id: req.query.id })
    .then(event => {
      console.log("Deleted event", event);
      res.status(200).json(event);
    })
    .catch(err => {
      console.log('Error trying to delete event', err);
      res.status(500).json(err);
    })
  
})

module.exports = router;