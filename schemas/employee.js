var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var EmployeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

EmployeeSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Employee', EmployeeSchema);

