const mongoose = require('mongoose');
/*var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
 var mongourl = 'mongodb://test:test@ds163940.mlab.com:63940/student';
mongoose.createConnection(mongourl,options);
var db = mongoose.connection; 
db.once("open",function(){
  console.log("Connection Established");
}); */

var adminLoginSchema = mongoose.Schema({
  adminName : {type:String, required:true},
  adminPassword : {type:String, required:true}
});

module.exports = mongoose.model('admin',adminLoginSchema);
