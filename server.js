var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars')

var app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
var options = { dotfiles: 'ignore', etag: false,
                extensions: ['htm', 'html'],
                index: false};

app.use(express.static(path.join(__dirname, 'public') , options  ));


app.get('/', function(req, res)
{
    res.render('index');   // this is the important part
});

app.listen(app.get('port'),  function () {
    console.log('Hello express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});




