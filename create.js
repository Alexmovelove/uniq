//CREATE DATABASE [IF NOT EXISTS] имя_базы_даных;
const mysql = require("mysql2");
const steem = require('steem');
const fs = require("fs");    
var settings = require('./config.js');

let body3R = '';
let num_day = settings.num_day;
let bd_name = settings.bd_name;
let hive_name = settings.hive_name;
let image_list = settings.image_list;
let title_name = settings.title_name;

config = {
  host: "localhost",
  user: "root",
  database: bd_name,
  password: "root"
}

const connection = mysql.createConnection(config);

let sql3 = `create database ${hive_name}`;
console.log(sql3);						 

connection.query(sql3, function(err, results) {
if(err) console.log(err);
else console.log("Таблица создана");
});

let sql = `create table if not exists ${hive}.spisok( id int primary key auto_increment, author varchar(255) UNIQUE KEY)`;
console.log(sql);						 

connection.query(sql, function(err, results) {
if(err) console.log(err);
else console.log("Таблица создана");
});

let sql2 = `create table if not exists ${hive}.post_number( id int primary key auto_increment, number int)`;
console.log(sql2);						 

connection.query(sql2, function(err, results) {
if(err) console.log(err);
else console.log("Таблица создана");
});

const sql4 = `INSERT INTO ${hive_name}.post_number(id, number) VALUES('1','0')`;
console.log(sql4);						 
								 
connection.query(sql4, function(err, results) {
if(err) console.log(err);
else console.log("Таблица создана");
});



//npm i steem
//npm i form-data
//npm i axois

connection.end();


