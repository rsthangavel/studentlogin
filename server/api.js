/**
 * Created by thangavel on 17/4/17.
 */
const express = require('express');
const router = express.Router();
 bcrypt = require('bcrypt');
 var jwt = require('jsonwebtoken');  
 var passport = require('passport');
const mongoose = require('mongoose');
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       
 var mongourl = 'mongodb://test:test@ds163940.mlab.com:63940/student';
mongoose.connect(mongourl,options);
var db = mongoose.connection;
db.once("open",function(){
  console.log("Connection Established");
});
var adminLoginSchema = mongoose.Schema({
  adminName : {type:String, required:true},
  adminPassword : {type:String, required:true}
});
var studentLoginSchema = mongoose.Schema({
  studentId : {type:Number, required:true},
  studentPassword : {type:String, required:true}
});
var adminCollection = mongoose.model('admin',adminLoginSchema);
var studentCollection = mongoose.model('student',studentLoginSchema);
adminLoginSchema.methods.comparePassword = function(pw, cb){
  bcrypt.compare(pw, this.password, function(err, isMatch){
    if(err){
      return cb(err);
    }
    cb(null, isMatch);
  })
};
studentLoginSchema.methods.comparePassword = function(pw, cb){
  bcrypt.compare(pw, this.password, function(err, isMatch){
    if(err){
      return cb(err);
    }
    cb(null, isMatch);
  })
};


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
  adminCollection.findOne({
    adminName:req.body.adminName
  }, function(err,user){
    if(err) throw err;
    if(!user){
      res.send({success:false, message:'User not Found'});
    }
    else{
      user = user.adminName;
     // console.log(user.adminName);
      adminCollection.findOne({adminName:req.body.adminName, adminPassword:req.body.adminPassword }, function(err, isMatch){
        if(isMatch && !err){
          var token = jwt.sign({
               data: user
          },'secret',{ expiresIn: 60*60});
          res.json({success:true, token: 'JWT'+ token});
        }
        else{
          res.send({success:false, message: 'Password match failed'});
        }
      })
    }
  })
});

router.post('/student-login', function(req,res){
  studentCollection.findOne({
    studentName:req.body.studentId
  }, function(err,user){
    if(err) throw err;
    if(!user){
      res.send({success:false, message:'User not Found'});
    }
    else{
      user = user.studentId;
     // console.log(user.adminName);
      adminCollection.findOne({studentId:req.body.studentId, studentPassword:req.body.studentPassword }, function(err, isMatch){
        if(isMatch && !err){
          var token = jwt.sign({
               data: user
          },'secret',{ expiresIn: 60*60});
          res.json({success:true, token: 'JWT'+ token});
        }
        else{
          res.send({success:false, message: 'Password match failed'});
        }
      })
    }
  })
});
router.post('/admin-dashboard', passport.authenticate('jwt',{session:false}), function(req,res){
  res.send('');
})

module.exports = router;
