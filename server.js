const express = require('express');
const hbs = require('hbs');

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get('/', function(req, res){
    res.render('home.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear(),
        welcome: 'Welcome message'
    })
});

//ES5 function syntax
app.get('/about', function(req, res){
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    })
});

//ES6 syntax of arrow function
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Bad Request'
    });
});

app.listen(3000, function(){
    console.log('Application Started');
});
