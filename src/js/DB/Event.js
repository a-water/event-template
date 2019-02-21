let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EventModelSchema = new Schema({
  title: String,
  attendees: [String]
});

let Event = mongoose.model('EventModel', EventModelSchema);

module.exports = Event;