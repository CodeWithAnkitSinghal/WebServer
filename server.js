const express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send({
        name: 'Ankit',
        age: 30
    });
});

app.listen(3000, function(){
    console.log('Application Started');
});
