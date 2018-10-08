const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', function(req, res){
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcome: 'Welcome message'
    })
});

//ES5 function syntax
app.get('/about', function(req, res){
    res.render('about.hbs', {
        pageTitle: 'About Page'
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
