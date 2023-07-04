const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const dotenv = require('dotenv');
const path = require('path');
// const mongoose = require('mongoose');
// const connectDB = require('./server/database/connection');
// const addtodb = require('./server/controller/controller')

// sqlDB conn
const mysql = require('mysql2');
const twilio = require('twilio');
const connectSQLdb = require('./server/database/sqldb_connection');
const sqldb_funcs = require('./server/controller/mysql_controller');


// middlewares
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


// database conneciton
// connectDB();
// addtodb();


// sql db connection
// connectSQLdb();


// routes
app.get("/", function(req, res){
  res.render("home");
});
app.get('/sign_in_up', (req, res) => {
  res.render('sign_in_up')
});
app.get('/tests', (req, res) => {
  res.render('tests');
  sqldb_funcs.getdata();
});
app.post('/sign_in_up', (req, res) => {
  const user_name = req.body.user_name;
  const user_number = req.body.mobile_num;
  if(!user_name || !user_number){
    console.log("Fields cannot be empty");
  }else{
    sqldb_funcs.insertOne(user_name, user_number);
    res.redirect('/sign_in_up')
  } 
})


dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}`);
});