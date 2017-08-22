const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const mongo = require('mongodb').MongoClient;

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(express.static("views"));


//mongo.connect starts here
mongo.connect('mongodb://127.0.0.1:27017/RoboDaily', function (err, db){
  const nonliving = db.collection('robots');
  console.log(nonliving);

  app.get('/', function (req, res) {
    nonliving.find()
    .toArray()
    .then(function (data){
      res.render('index.mustache', {
          inhuman: data,
      });
    });
  });

  app.get('/available', function(req, res){
    nonliving.find()
    .toArray()
    .then(function (data){
      res.render('available', {
          inhuman: data,
      });
    });
  });

  app.get('/employed', function(req, res){
    nonliving.find()
    .toArray()
    .then(function (data){
      res.render('employed', {
          inhuman: data,
      });
    });
  });

  app.listen(3000, function () {
      console.log('Successfully started express application!')
  });
});
// mongo.connect ends here
