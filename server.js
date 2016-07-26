var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use('/',express.static(__dirname + '/public'));

// ROUTES

app.get('/', function(req,res) {
  res.render('pages/index');
});

app.get('/about_me', function(req,res) {
  res.render('pages/about_me');
});

app.get('/contact', function(req,res) {
  res.render('pages/contact');
});

app.get('/portfolio', function(req,res) {
  res.render('pages/portfolio');
});


app.get('/error', function(req,res) {
  res.render('pages/error');
});

//SERVER

app.listen(3000);
console.log('TITTIES!!!');