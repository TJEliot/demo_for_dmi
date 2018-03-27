var myDB = require('../react-client/mysqlitedatabase.js');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// app.use(express.static(__dirname + '/../react-client/dist'));

// this.saveFunc = this.saveFunc.bind(this);
app.get('/items', function (req, res) {
  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.send('what what')
  //     res.json(data);
  //   }
  // });
});

app.get('/', function(req, res) {
  res.status(200);
  res.send(`<h1>This is where we save quotes</h1>
    <textArea id="quoteBox" placeholder="What quote would you like to save?"></textArea>
    <button onclick="app.get('/quotes')">save this quote</button>`
    );
})

app.get('/quotes', function(req, res) {
  res.status(200);
  console.log('yes');
})

var saveFunc = function(){
  console.log('yes');
  alert('yes');
}

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

