let express = require('express');
let app = express();
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const PizzaCarts = require('./pizza-cart');

app.use(express.static('public'))

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

const pizzacart = PizzaCarts();

app.get("/", function(req, res){
    

    res.render('home');
  });

app.post('/Cart', function(req, res){
    res.render('Cart');

});

let smallprice=0;
var countersmall=0;
let mediumprice=0;
var countermedium=0;
let largeprice=0;
var counterlarge=0;
  

app.post('/Bsmall', function(req, res){
  countersmall =countersmall + 1,
  smallprice =smallprice + 49.00,
  console.log(smallprice);
  res.render("home", {

    numSmallpizza: countersmall,
    smallcost: smallprice.toFixed(2)
 })
});

app.post('/smllplus', function(req, res){
  countersmall =countersmall + 1,
  smallprice =smallprice + 49.00,
  console.log(smallprice);
  res.render("home", {

    numSmallpizza: countersmall,
    smallcost: smallprice.toFixed(2)
 })

});

app.post('/Bmedium', function(req, res){

  countermedium =countermedium + 1,
  mediumprice =mediumprice+ 89.00,
console.log(mediumprice);
  res.render("home", {

    nummediumpizza: countermedium,
    mediumcost: mediumprice.toFixed(2)
 })
});

  
  let PORT = process.env.PORT || 3007;
  
  app.listen(PORT, function(){
    console.log('App starting on port', PORT);
  });