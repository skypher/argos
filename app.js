var express = require('express')
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use('/static', express.static(__dirname + '/static'));

app.get('/great-conjunctions', function(req, res){
  var events = [{'date': 123, 'description': 'frobs the baz'}];
  res.render('great-conjunctions', {'events': events});
});

var server = app.listen(3100, function() {
    console.log('View the stars on port %d', server.address().port);
});

