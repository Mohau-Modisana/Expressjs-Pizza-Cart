let express = require('express');
let app = express();
const exphbs  = require('express-handlebars');

app.use(express.static('public'))

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

app.get("/", function(req, res){
    res.render('home');
  });

app.post('/Cart', function(req, res){
    res.render('Cart');

});

  
  let PORT = process.env.PORT || 3007;
  
  app.listen(PORT, function(){
    console.log('App starting on port', PORT);
  });