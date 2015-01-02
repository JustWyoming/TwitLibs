
var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models/index.js')
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
  res.render('index',{template:false, selected: 1});
})

app.post('/', function(req, res){
 db.template.find({where: {category_id: req.body.libId}}).then(function(libTemplate){
  helpers.doLib(libTemplate.content,req.body.hash,function(libbed) {
   var selected = req.body.libId
   res.render('index',{template: libbed, libId: libTemplate.id, selected: selected})
 })   

}) 

})
 //fame save routes
 app.post('/fame', function(req, res){
   db.save.create(req.body).then(function(data){
    res.redirect('/fame/'+data.id);
  })


 })

 app.get("/fame", function(req, res){ 
  db.save.findAll().done(function(error,data){
    res.render('fame',{data:data});
  })
  
})

 app.get("/fame/:id",function(req,res){
  db.save.find(req.params.id).done(function(error,data){
    var shareUrl = encodeURIComponent("http://"+req.headers.host+"/fame/"+data.id);
    var picUrl = encodeURIComponent("http://"+req.headers.host+"/screengrab.png");
    res.render('show', {content: data.user_twitlibs, share:shareUrl, pic: picUrl});
  })
  
})


// rules routes
app.get("/rules", function(req, res){ 
  res.render('rules');
})


// about routes
app.get("/about", function(req, res){ 
  res.render('about');
})

//error page
app.use(function(req, res, next){
  res.render('404');
});



//listen routes//
app.listen(process.env.PORT || 3000)
