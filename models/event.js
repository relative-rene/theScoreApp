var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Fighter = require('./fighter');

var eventSchema = new Schema({
  headliners:String,
  arena:String,
  date:String,
  city:String,
  opponent:['FighterSchema']
});

module.exports = mongoose.model('Event', eventSchema);
