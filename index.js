var express = require('express');
var App = express();
var PORT = 3001 || process.env.PORT
var Http = require('http').createServer(App).listen(PORT);
var nodemailer = require('nodemailer');


///DEMO
/*
localhost:3001/loremoxi9985@gmail.com/kikobor/whatsup
*/
//



var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dolphinapp885@gmail.com',
    pass: 'pj99lv8uypj99lv8uy'
  }
});


App.get('/:Email/:Title/:Body',(req,res)=>{
var op =req.params.Email
var op1 =req.params.Title
var op2 =req.params.Body

if(op && op1 && op2){

var mailOptions = {
  from: 'dolphinapp885@gmail.com',
  to: op,
  subject: op1,
  text: op2
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    res.sendStatus(404);
  } else {
    res.sendStatus(200);
  }

}); 
}



})

/*



*/