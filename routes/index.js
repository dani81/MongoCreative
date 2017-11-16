var express = require('express');
var fs = require('fs');
var router = express.Router();
var https = require('https');
var request = require('request');
var mongoose = require('mongoose'); //Adds mongoose as a usable dependency

mongoose.connect('mongodb://localhost/deckDB', { useMongoClient: true }); //Connects to a mongo database called "commentDB"

var commentSchema = mongoose.Schema({ //Defines the Schema for this database
Name: String,
Image: String,
Color: String,
Type: String
});

var Comment = mongoose.model('Comment', commentSchema); //Makes an object from that schema as a model

var db = mongoose.connection; //Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
console.log('Connected');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('mtg.html', {root: 'public'});
});

router.get('/getcard', function(req,res,next){
  //var url = 'https://api.magicthegathering.io/v1/cards?name=' + req.query.q
  var url = "https://api.magicthegathering.io/v1/sets/" + req.query.q + "/booster";
  request(url).pipe(res);
});

router.post('/addcard', function(req,res,next){
  var url = 'https://api.magicthegathering.io/v1/cards?id=' + req.query.q
   
});

module.exports = router;
