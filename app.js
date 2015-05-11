var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.post('/videos', indexController.createVideo);
app.get('/submissions', indexController.submissions);
app.get('/vote/:slug', indexController.vote);

var server = app.listen(4775, function() {
	console.log('Express server listening on port ' + server.address().port);
});
