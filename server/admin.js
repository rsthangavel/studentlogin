const mongoose = require('mongoose');


var adminLoginSchema = mongoose.Schema({
  adminName : {type:String, required:true},
  adminPassword : {type:String, required:true}
});

module.exports = mongoose.model('admin',adminLoginSchema);
