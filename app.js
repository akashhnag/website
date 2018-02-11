var express=require('express');
var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended: false});
var path=require('path');
var app=express();
var ejs=require('ejs');
var nodemailer=require('nodemailer');
var routes=require('./routes/routes');

app.set('view engine','ejs');
app.use(bodyParser.json());
app.use("/",express.static('public'));
app.use("/services",express.static('public'));



routes(app);


app.listen(3000,function(){
  console.log("listening to port 3000");
});
