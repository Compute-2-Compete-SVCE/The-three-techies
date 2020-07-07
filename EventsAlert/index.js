var mongoose = require('mongoose');
const bodyParser = require("body-parser");
const express= require("express");
const app= express();
var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  passwordConf: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  phone:{
	  type:Number,
	  unique: true,
	  required: true,
	  trim:true
  }
 
});
var User = mongoose.model('User', UserSchema);
module.exports = User;

app.post("/signup",function(req,res){
if (req.body.username &&
	req.body.password &&
	req.body.passwordConf && req.body.email) {
  
	var userData = {
	  email: req.body.email,
	  username: req.body.username,
	  password: req.body.password,
	  passwordConf: req.body.passwordConf,
	}
  
	//use schema.create to insert data into the db
	User.create(userData, function (err, user) {
	  if (err) {
		return next(err)
	  } else {
		return res.redirect('/home');
	  }
	});
  }

  UserSchema.pre('save', function (next) {
	var user = this;
	bcrypt.hash(user.password, 10, function (err, hash){
	  if (err) {
		return next(err);
	  }
	  user.password = hash;
	  next();
	})
  });
  app.use(session({
	secret: 'work hard',
	resave: true,
	saveUninitialized: false
  }));
})
app.post("/sign",function(req,res){

  UserSchema.statics.authenticate = function (email, password, callback) {
	User.findOne({ email: email })
	  .exec(function (err, user) {
		if (err) {
		  return callback(err)
		} else if (!user) {
		  var err = new Error('User not found.');
		  err.status = 401;
		  return callback(err);
		}
		bcrypt.compare(password, user.password, function (err, result) {
		  if (result === true) {
			return callback(null, user);
		  } else {
			return callback();
		  }
		})
	  });
  }
})