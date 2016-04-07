var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/project-1");

module.exports.Fighter = require('./fighter.js');
module.exports.Judge = require('./judge.js');
module.exports.Referee = require('./ref.js');
module.exports.User = require('./user.js');