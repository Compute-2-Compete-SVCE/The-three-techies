//jshint esversion:6
var swal= require("sweetalert");
const express= require("express");
const bodyParser = require("body-parser");
var http= require("http");
const mongoose= require('mongoose');
var alert=require('alert');
//var JSAlert = require("js-alert");
var Schema= mongoose.Schema;
var User= require("./User");
var nodemailer = require('nodemailer');
var schedule= require('node-schedule');

mongoose.connect('mongodb://localhost:27017/usersDB');
var db=mongoose.connection;

db.on('error',console.log.bind(console,"connection error"));
db.once('open',function(callback){
    console.log("connection succeeded");
});



const app= express();
app.use(bodyParser.json());


app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get('/sign',function(req,res){
    res.sendFile(__dirname + "/sign.html");
    
});

app.post('/mail',function(req,res){
   
    var email = req.body.emailid;
    var event= req.body.eventname;
  //  console.log(email);
   // console.log(event);
    var date= new Date(2020,06,06,08,30,0);
    console.log(date);
    var mailOpts,smtpConfig;
    smtpConfig = nodemailer.createTransport( {
    service: 'Gmail',
    auth: {
        user: 'arnivethitha99',
        pass: 'rajendran'
    },
    tls:{
        rejectUnauthorized:false
    }
   });
    mailOpts = {

        from: 'arnivethitha99@gmail.com',
        //grab form    data from the request body object
        to: req.body.emailid,
        subject: 'Notification on  Trend Driven Certification'  ,
        text:'Whats Up?: Trend Driven Certification',
        text2:'Category: Education',
        text3: 'When? : 2020-07-23',
         text4:'What else? : The Trend Driven Innovation Certification Program, is based on Trend Watching’s celebrated methodology for observing innovations',
         text5:'Where?: Delhi'
    };       
    console.log('created');
    console.log(mailOpts);
    
    schedule.scheduleJob(date,function(error){
         console.log(error);

     smtpConfig.sendMail(mailOpts,function(error,response){
      if(error){
          console.log(error);
          console.log('Email sending failed');
      }
      else{
          console.log('Email sent');
      }
    });

});   

});

   
  

app.post('/signup',function(req,res,next){
   /* var user= req.body.user;
    var pass= req.body.pass;
    var cpass = req.body.cpass;
    var email= req.body.email;
    var phone= req.body.phone;

    var data={
         "user":user,
        "pass": pass,
        "cpass": cpass,
        "email": email,
        "phone":phone
    }
    if(pass==cpass){
    db.collection('userdetails').insertOne(data,function(err,collection){
        if(err) throw err;
        
        console.log("Record inserted");
    });
}
    else{
         console.log("Password mismatch");
    }
})*/
 
     console.log("Entered into");
  
	var userData = {
	  username: req.body.username,
	  password: req.body.password,
      passwordConf: req.body.passwordConf,
      email:req.body.email,
      phone:req.body.phone,
	};
  
	//use schema.create to insert data into the db
	User.create(userData, function (err, user) {
        console.log("Insert 1");
	  if (err) {
          console.log("Insert 2");
		       return next(err);
	  } else {
              console.log("Inserted");
		      return res.sendFile(__dirname + "/home.html");
	  }
    });


   /* UserSchema.pre('save', function (next) {
      
	    var user = this;
    	bcrypt.hash(user.password, 10, function (err, hash){
	  if (err) {
		return next(err);
	  }
	  user.password = hash;
	  next();
    })

})*/ 
}) ;
    
    app.post("/sign",function(req,res){
      console.log("Login starts");    
   /* db.collection('userdetails').find(function(err,userdetails){
        console.log("Entered");
        //if("data.user"===req.body.user && "data.pass"===req.body.pass){
             console.log(userdetails);
             console.log(req.body.user);
             res.redirect('home.html');
             
    }) */
    //UserSchema.statics.authenticate = function (username, password, callback) {
           console.log("Logging in...");
           var username= req.body.username;
           var password= req.body.password;
           User.findOne({ username: username,password: password },
          function (err, user) {
              
            if (err) {
              console.log(err);
            } else if (!user) {
                alert("Incorrect username or password");
                //return res.sendFile(__dirname + "/index.html");
                }  
            else{
                console.log("Returning");
               return res.sendFile(__dirname + "/home.html");
            }
        });
    
});
    
    






app.listen(3000,function(){
    console.log("Server is running on port 3000");
});
