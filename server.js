//jshint esversion:6
const express = require("express");
const ejs = require("ejs");
const getJSON = require('get-json')
const app = express();

app.set('view engine', 'ejs');
let api;
let hospital={};

// api call 
getJSON('https://hpb.health.gov.lk/api/get-current-statistical', function(error, response) {
     api = response;
    if (api != null) {
        console.log("api call completed....");
        hospital=api.data.hospital_data;


    } else{
      console.log("Something Wrong !...");
    }

});

app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("pages/index",{
    local_total_cases:api.data.local_total_cases,
    local_new_cases:api.data.local_new_cases,
    local_deaths:api.data.local_deaths, 
    local_new_deaths:api.data.local_new_deaths,
    local_recovered:api.data.local_recovered,
    local_active_cases:api.data.local_active_cases,
    hospital:hospital
    
  });
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});