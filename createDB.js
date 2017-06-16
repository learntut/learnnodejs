
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:12701/mydb";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});