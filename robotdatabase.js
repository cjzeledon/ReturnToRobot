// to require data.js
// require mongodb
const mongo = require('mongodb').MongoClient;
const data = require('./data');

// have a for loop that adds each object from data.js to mongo database
mongo.connect('mongodb://127.0.0.1:27017/RoboDaily', function (err, db){
    let robots = db.collection('robots');
        for (let i = 0; i < data.users.length; i++){
        robots.insert(data.users[i]);
      }
        db.close();
  })
