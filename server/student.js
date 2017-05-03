const mongoose = require('mongoose');
/*var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
 var mongourl = 'mongodb://test:test@ds163940.mlab.com:63940/student';
mongoose.createConnection(mongourl,options);
var db = mongoose.connection; 
db.once("open",function(){
  console.log("Connection Established");
}); */

var studentSchema = mongoose.Schema({
  studentName :{ type:String, requied: true},
  studentID : { type:Number, unique:true},
  googleID : { type:Number, default:0},
  facebookID : { type:Number, default: 0},
  email : { },
  token : {},
  Role : { type:String, default: 'student'},
  studentYear : { type:Number},
  studentDeparment : { type: String},
  studentPassword : {}
})

module.exports =  mongoose.model('student',studentSchema);
