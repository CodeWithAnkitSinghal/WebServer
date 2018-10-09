const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

const port = process.env.PORT  || 3000;

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method}: ${req.url}`;
    console.log(log);
    fs.appendFile('log.txt', log + '\n', (error) => {
        if(error){
            console.log('Unable to append to log file');
        }
    });
    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

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

app.listen(port, function(){
    console.log(`Application Started at port ${port}`);
});
