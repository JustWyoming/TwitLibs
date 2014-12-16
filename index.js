
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var expressControllers = require('express-controller');
var helpers = require('./lib/helpers');

var app = express();

app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
  secret: 'finallytwitterisuseful',
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

//index routes//
app.get("/", function(req, res){ 
  res.render('index');
})

app.post("/hashtag", function(req,res){
  //res.send(req.body.hash);
	helpers.getTweetWords(req.body.hash,function(words){
  var pos = helpers.doPos(words);
 console.log(libs);
  //res.render('index', );
	})
})


// rules routes

app.get("/rules", function(req, res){ 
  res.render('rules');
})

// hall of fame routes

app.get("/fame", function(req, res){ 
  res.render('fame');
})

//listen routes//
app.listen(3000);
