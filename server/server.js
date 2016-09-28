const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/starter';
mongoose.connect(mongoURI);
const contactController = require(__dirname+'/contact/contactController');

app.use(express.static(path.join(`${__dirname}/../client`)));
app.use(bodyParser.urlencoded({
  extended: true
}));

// handle requests
app.get('/', function(req, res) {
  res.sendFile(path.join(`${__dirname}/../client/index.html`));
  res.render('../client/index.html');
});

app.get('/contacts', contactController.getContacts);

app.post('/contacts', function(req, res) {
  contactController.postContact(req, res);
});

app.listen(3000);

module.exports = app;
