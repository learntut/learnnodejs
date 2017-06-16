var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars')
var MongoClient = require('mongodb').MongoClient;

var app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
var options = { dotfiles: 'ignore', etag: false,
                extensions: ['htm', 'html'],
                index: false};

var url = "mongodb://localhost:12701/mydb";

app.use(express.static(path.join(__dirname, 'public') , options  ));

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

app.get('/', function(req, res)
{
    res.render('index');   // this is the important part
});

app.get('/movies',function(req,res){

});

app.get('/addmovie',function(req,res){

});

app.get('/editmovie',function(req,res){

});


app.listen(app.get('port'),  function () {
    console.log('Hello express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});




