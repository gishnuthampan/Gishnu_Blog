var express = require('express');
var uc,cred1,cred2,logid,pwd,loginid,newp,confp;
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, '/public'))); 
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
var mongo=require('mongodb');
var mongoClient=mongo.MongoClient;
var url="mongodb://ebin:ebin@ds059496.mlab.com:59496/gishnu_blog";
console.log("connected");
mongoClient.connect(url,function (err,db){
	uc=db.collection("table");
	// uc.insert({username:"ebin",password:"ebin"});
}); 
app.post('/login',function (req,res){
	cred1=req.param('uname');
	cred2=req.param('pass');
	// console.log(cred1+'gss'+cred2);
 uc.find({username: cred1}).toArray(function(err, docs) { 
 	console.log(docs);
 	if(docs.length==0&&cred1!=null&&cred2!=null){
      uc.insert({username:cred1,password:cred2});
  res.sendFile(__dirname+'/home.html'); 

    }
    else if(docs.length!=0){
      console.log("user name already exists!!!");
      res.sendFile(__dirname+'/signup.html'); 
    }
 newp=req.param('newpass');
 confp=req.param('new_con_pass');
 if(newp===confp){

uc.update({username:loginid},
   {$set:{password:confp}},{multi:true});
 	 res.sendFile(__dirname+'/login.html'); 
     }
     else {
     	res.sendFile(__dirname+'/reset.html'); 
     }
})
});
app.post('/home',function (req,res){
	logid=req.param('un');
	pwd=req.param('pa');
	// console.log(cred1+'gss'+cred2);
 uc.find({username:logid,password:pwd}).toArray(function (err, docs) { 
 	if(docs.length==0){
  res.sendFile(__dirname+'/login.html'); 
    }
    else{
  res.sendFile(__dirname+'/home1.html'); 
   }
})
});
app.post('/reset',function (req,res){
	loginid=req.param('newname');
	// console.log(cred1+'gss'+cred2);
 uc.find({username:loginid}).toArray(function (err, docs) { 
 	if(docs.length==0){
  res.sendFile(__dirname+'/forgot.html'); 
    }
    else{
  res.sendFile(__dirname+'/reset.html'); 
         
    }
})
});


app.get('/', function (req, res) {
   res.sendFile(__dirname+'/home.html')
});
app.get('/login', function (req, res) {
   res.sendFile(__dirname+'/login.html')
});
app.get('/signup', function (req, res) {
   res.sendFile(__dirname+'/signup.html')
});
app.get('/home', function (req, res) {
   res.sendFile(__dirname+'/home.html')
});
app.get('/forgot', function (req, res) {
   res.sendFile(__dirname+'/forgot.html')
});
app.get('/reset', function (req, res) {
   res.sendFile(__dirname+'/reset.html')
});
app.get('/home1', function (req, res) {
   res.sendFile(__dirname+'/home1.html')
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
