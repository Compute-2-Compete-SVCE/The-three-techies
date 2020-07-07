//jshint esversion: 6

//const express= require('express');
//const request = require('request');
const eventbrite = new EventBrite();
const ui =new UI();


//var jsontoxml= require('jsontoxml');
//var express = require('express');
//var bodyParser= require('body-parser');
//const app=express();

/*app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
  next();
});*/


//console.log(eventbrite);




document.getElementById('submitBtn').addEventListener('click',(e) => {
    e.preventDefault();

    const eventName = document.getElementById('event-name').value;
    const category = document.getElementById('category').value;

    console.log(eventName + ' : ' + category);


   if(eventName !== ''){
    const eventsList= eventbrite.queryAPI(eventName,category)
    .then(events=>{
       //console.log("working");
        //console.log(events.events.event);
       

        if(events.events===null){
        //  console.log(events.events);
          alert("No results found");
        }
        else{
         console.log(events.events.event);
         ui.displayEvents(events.events.event);
        }
       // return eventResponse;
        });
     
     
   }
   else{
      // ui.printMessage('Add an event or city',' text-center alert alert-danger mt-4');
     alert("Add an event or city");
   }

});