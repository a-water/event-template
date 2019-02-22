let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EventSchema = new Schema({
  title: String,
  attendees: [String]
});

let Event = mongoose.model('EventModel', EventSchema);

module.exports = Event;