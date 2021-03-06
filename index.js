let express = require('express');
let app = express();
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const PizzaCarts = require('./pizza-cart');

app.use(express.static('public'))

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//importing sqlite modules
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

const pizzacart = PizzaCarts();

open({
	filename: './Costumers.db',
	driver: sqlite3.Database
}).then(async function (db) {

	// run migrations

	await db.migrate();

  app.get("/", function(req, res){
    
    // db
    // .all('select * from Costumers')
    // .then (function(Costumers){
    //   console.log(Costumers);

      res.render('login', {
      });
    // })

  });

app.post('/Cart', function(req, res){

  
    res.render('Cart');


});

app.post('/login', async function(req, res){

  console.log(req.body.OrderName, req.body.Contacts, req.body.Address);

  const insert_login = 'insert into Costumers(Names, Contacts, Locations) values (?, ?, ?)'
  await  db.run(insert_login, req.body.OrderName, req.body.Contacts, req.body.Address);
  
  
  res.render('home');

});

let smallprice=0;
var countersmall=0;
let mediumprice=0;
var countermedium=0;
let largeprice=0;
var counterlarge=0;
let totalprice=0;
  

app.post('/Bsmall', function(req, res){
  countersmall =countersmall + 1,
  smallprice =smallprice + 49.00,
  totalprice= smallprice + mediumprice + largeprice,
  console.log(smallprice);
  res.render("home", {

    numSmallpizza: countersmall,
    smallcost: smallprice.toFixed(2),
    nummediumpizza: countermedium,
    mediumcost: mediumprice.toFixed(2),
    numlargepizza: counterlarge, 
    largecost: largeprice.toFixed(2),
    totalcost: totalprice.toFixed(2)
 })
});

app.post('/smllplus', function(req, res){
  countersmall =countersmall + 1,
  smallprice =smallprice + 49.00,
  totalprice= smallprice + mediumprice + largeprice,
  console.log(smallprice);
  res.render("home", {

    numSmallpizza: countersmall,
    smallcost: smallprice.toFixed(2),
    nummediumpizza: countermedium,
    mediumcost: mediumprice.toFixed(2),
    numlargepizza: counterlarge, 
    largecost: largeprice.toFixed(2),
    totalcost: totalprice.toFixed(2)
 })
});

app.post('/smllminus', function(req, res){
  if(smallprice>0){
  countersmall =countersmall - 1,
  smallprice =smallprice - 49.00,
  totalprice= smallprice + mediumprice + largeprice,
  console.log(smallprice);
  }
  res.render("home", {

    numSmallpizza: countersmall,
    smallcost: smallprice.toFixed(2),
    nummediumpizza: countermedium,
    mediumcost: mediumprice.toFixed(2),
    numlargepizza: counterlarge, 
    largecost: largeprice.toFixed(2),
    totalcost: totalprice.toFixed(2)
 })

});

app.post('/Bmedium', function(req, res){

  countermedium =countermedium + 1,
  mediumprice =mediumprice+ 89.00,
  totalprice= smallprice + mediumprice + largeprice,
 console.log(mediumprice);
  res.render("home", {

    numSmallpizza: countersmall,
    smallcost: smallprice.toFixed(2),
    nummediumpizza: countermedium,
    mediumcost: mediumprice.toFixed(2),
    numlargepizza: counterlarge, 
    largecost: largeprice.toFixed(2),
    totalcost: totalprice.toFixed(2)
 })
});

app.post('/mdiumplus', function(req, res){

  countermedium =countermedium + 1,
  mediumprice =mediumprice+ 89.00,
  totalprice= smallprice + mediumprice + largeprice,
 console.log(mediumprice);
  res.render("home", {

    numSmallpizza: countersmall,
    smallcost: smallprice.toFixed(2),
    nummediumpizza: countermedium,
    mediumcost: mediumprice.toFixed(2),
    numlargepizza: counterlarge, 
    largecost: largeprice.toFixed(2),
    totalcost: totalprice.toFixed(2)
 })
});

app.post('/mdiumminus', function(req, res){
  if(mediumprice>0){
  countermedium =countermedium - 1,
  mediumprice =mediumprice - 89.00,
  totalprice= smallprice + mediumprice + largeprice,
 console.log(mediumprice);
  }

  res.render("home", {

    numSmallpizza: countersmall,
    smallcost: smallprice.toFixed(2),
    nummediumpizza: countermedium,
    mediumcost: mediumprice.toFixed(2),
    numlargepizza: counterlarge, 
    largecost: largeprice.toFixed(2),
    totalcost: totalprice.toFixed(2)
 })
});

app.post('/Blarge', function(req, res){
  counterlarge =counterlarge + 1,
  largeprice =largeprice + 129.00,
  totalprice= smallprice + mediumprice + largeprice,
  console.log(largeprice);
  res.render("home", {

    numSmallpizza: countersmall,
    smallcost: smallprice.toFixed(2),
    nummediumpizza: countermedium,
    mediumcost: mediumprice.toFixed(2),
    numlargepizza: counterlarge, 
    largecost: largeprice.toFixed(2),
    totalcost: totalprice.toFixed(2)
 })
});

app.post('/lrgeplus', function(req, res){
  counterlarge =counterlarge + 1,
  largeprice =largeprice + 129.00,
  totalprice= smallprice + mediumprice + largeprice,
  console.log(smallprice);
  res.render("home", {

    numSmallpizza: countersmall,
    smallcost: smallprice.toFixed(2),
    nummediumpizza: countermedium,
    mediumcost: mediumprice.toFixed(2),
    numlargepizza: counterlarge, 
    largecost: largeprice.toFixed(2),
    totalcost: totalprice.toFixed(2)
 })
});

app.post('/lrgeminus', function(req, res){
  if(largeprice>0){
  counterlarge =counterlarge - 1,
  largeprice =largeprice - 129.00,
  totalprice= smallprice + mediumprice + largeprice,
  console.log(smallprice);
  }
  res.render("home", {

    numSmallpizza: countersmall,
    smallcost: smallprice.toFixed(2),
    nummediumpizza: countermedium,
    mediumcost: mediumprice.toFixed(2),
    numlargepizza: counterlarge, 
    largecost: largeprice.toFixed(2),
    totalcost: totalprice.toFixed(2)
 })
});

	// only setup the routes once the database connection has been established

})



  
  let PORT = process.env.PORT || 3007;
  
  app.listen(PORT, function(){
    console.log('App starting on port', PORT);
  });