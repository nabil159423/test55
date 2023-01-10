let express = require('express');
let app = express();

app.use(express.urlencoded({
    extended : true
}));

var mysql = require("mysql");

var connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : '1234',
    database    : 'catalogue'   
});

connection.connect(function(error,result){
    if(error) console.log(error);
    console.log(result);    
});


exports.function1 = function(req,res){
    res.render('page1.ejs');

}
const user = require('../models/model1');
user1=new user("bernard","99");
user2= new user("sousou","44");
listuser=[];
listuser.push(user1);
listuser.push(user2);





exports.function2= function(req,res){
    user0 = new user()
    let infoid = req.body.idinformation;
    let firstname =req.body.firstname;
    user0 = new user(firstname,infoid);
    listuser.push(user0);
    console.log(listuser);


}

exports.function3=function(req,res){
    res.render('page2.ejs',{
        listuser:listuser,          
    });

}

