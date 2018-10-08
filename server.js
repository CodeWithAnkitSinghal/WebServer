const express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send({
        name: 'Ankit',
        age: 30
    });
});

//
app.get('/about', function(req, res){
    res.send('About Page');
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
