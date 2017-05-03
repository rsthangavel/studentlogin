/**
 * Created by thangavel on 17/4/17.
 */
const express = require('express');
var mongoose = require('mongoose');
var app = express();
var atob = require('atob');
const router = express.Router();
app.set('superSecret', 'Secret');
 bcrypt = require('bcrypt');
 var jwt = require('jsonwebtoken');
 var passport = require('passport');
 require('./config')(passport);
studentReg = require('./student');
adminLoginSchema  =  require('./admin');

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
 var mongourl = 'mongodb://test:test@ds163940.mlab.com:63940/student';
 mongoose.connect(mongourl,options);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once("open",function(){
  console.log("Connection Established");
});
/*const mongoose = require('mongoose');
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
 var mongourl = 'mongodb://test:test@ds163940.mlab.com:63940/student';
mongoose.createConnection(mongourl,options);
var db = mongoose.connection;
db.once("open",function(){
  console.log("Connection Established");
});
var adminLoginSchema = mongoose.Schema({
  adminName : {type:String, required:true},
  adminPassword : {type:String, required:true}
});
var studentSchema = mongoose.Schema({
  studentName :{ type:String, requied: true},
  studentID : { type:Number, required: true, unique:true},
  googleID : { type:Number, unique:true},
  email : { },
  token : {},
  Role : { type:String, default: 'student'},
  studentYear : { type:Number, required:true},
  studentDeparment : { type: String,required:true},
  studentPassword : {}
})

var token;
var adminCollection = mongoose.model('admin',adminLoginSchema);
var studentReg = mongoose.model('student',studentSchema);
*/

/*adminLoginSchema.methods.comparePassword = function(pw, cb){
  bcrypt.compare(pw, this.password, function(err, isMatch){
    if(err){
      return cb(err);
    }
    cb(null, isMatch);
  })
};
studentSchema.methods.comparePassword = function(pw, cb){
  bcrypt.compare(pw, this.password, function(err, isMatch){
    if(err){
      return cb(err);
    }
    cb(null, isMatch);
  })
}; */

router.use(passport.initialize());
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});
/*router.post('/admin-login',function(req, res) {

  name = req.body.adminName;
  password = req.body.adminPassword;
  adminCollection.find({'adminName' : name, 'adminPassword' : password},{}, function(err,docs){
    if(err){
      res.status(200).send(err);
    }
    if(docs){
      res.status(200).send(docs);
    }
    else{
      res.status(200).send("success");
    }
  })

}); */
router.post('/admin-login', function(req,res){
    res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Request-Method','POST');
   res.header('Access-Control-Allow-Headers','authorization');
  console.log(req);v
  // var a=new Buffer(req.headers.authorization,'base64').toString();
  if(req.body.adminId && req.body.adminPassword){
  studentReg.findOne({
    studentID:req.body.adminId, Role:'admin'
  }, function(err,user){
    console.log(err,user);
    if(err) throw err;
    if(!user){
      res.send({success:false, message:'User not Found'});
    }
    else{
     // console.log(user.adminName);
      studentReg.findOne({studentID:req.body.adminId, studentPassword:req.body.adminPassword }, function(err, isMatch){
        if(isMatch && !err){
         var token = jwt.sign({id: req.body.studentId, Role: isMatch.Role},'test', {
          expiresIn: 1440 // expires in 24 hours
        });
          res.json({success:true, token: token, Role: isMatch.Role});
        }
        else{
          res.send({success:false, message: 'Password match failed'});
        }
      })
    }
  })
}
else{
  res.send({success:false, message:'Error'});
}
}); 
router.post('/student-register',function(req,res){
   res.setHeader('Access-control-Allow-Origin','*');
   var student = {studentName : req.body.studentName, studentID: req.body.studentId, studentYear: req.body.studentYear, studentDeparment : req.body.studentDeparment, studentPassword : req.body.studentPassword }
   console.log(student);
   var register = new studentReg(student);
 
   register.save(function(err){
     if(err){
      console.log(err);
      res.json({success:false, message: 'RollNumber already registered with us'}); 
     }
     else{
       user = req.body.studentId;
         var token = jwt.sign({id: req.body.studentId, Role: 'student'},'test', {
          expiresIn: 1440 // expires in 24 hours
        });
      
       res.json({success:true, token:'JWT'+token});
     }
    
   });
});
router.post('/student-login', function(req,res){
  
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Request-Method','POST');
   res.header('Access-Control-Allow-Headers','authorization');

  // var a=new Buffer(req.headers.authorization,'base64').toString();
  if(req.body.studentId && req.body.studentPassword){
  studentReg.findOne({
    studentID:req.body.studentId
  }, function(err,user){
    console.log(err,user);
    if(err) throw err;
    if(!user){
      res.send({success:false, message:'User not Found'});
    }
    else{
     // console.log(user.adminName);
      studentReg.findOne({studentID:req.body.studentId, studentPassword:req.body.studentPassword }, function(err, isMatch){
        if(isMatch && !err){
         var token = jwt.sign({id: req.body.studentId, Role: isMatch.Role},'test', {
          expiresIn: 1440 // expires in 24 hours
        });
          res.json({success:true, token: token, Role: isMatch.Role});
        }
        else{
          res.send({success:false, message: 'Password match failed'});
        }
      })
    }
  })
}
else{
  res.send({success:false, message:'Error'});
}
});
router.post('/student-detail',function(req,res){
  res.setHeader('Access-control-Allow-Origin','*');
  console.log(req.body.token);
  if(req.body.token){
     
      jwt.verify(req.body.token, 'test', function(err, decoded) {  
         if(err){
           
           res.send({success:false, message: 'authenticate failed'});
         }
         else{
           if(decoded.Role == 'student'){
            studentReg.findOne({studentID: decoded.id},{},function(err,data){
              if(err){
                console.log(err);
              }
              else{
                res.send({success:true,message:data});
              }
            })
         }
         else if(decoded.Role == 'admin'){
            studentReg.find({Role:'student'},{},function(err,data){
              if(err){
                console.log(err);
              }
              else{
                res.send({success:true,message:data});
              }
            })
         }
         }
      });
  }
});
router.post('/admin-dashboard', passport.authenticate('jwt',{session:false}), function(req,res){
  res.send('');
});


router.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
router.get('/auth/facebook',
  passport.authenticate('facebook'),
  function(req, res){});
  router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
      console.log(req);
      var token = jwt.sign({id: req.user.studentID, Role:req.user.Role},'test', {
          expiresIn: 1440 // expires in 24 hours
        });
    res.redirect(307,'/student?token='+token);
  });
router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/student' }),
  function(req, res) {
    console.log(req.user);
    var token = jwt.sign({id: req.user.studentID, Role:req.user.Role},'test', {
          expiresIn: 1440 // expires in 24 hours
        });
          //res.json({success:true, token: token, Role: req});
          res.header('authorization',req.user.token);
    res.redirect(307,'/student?token='+token);
  });


module.exports = router;
