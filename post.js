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


	
let wifkey = '5JUERWQ7cu4RDYHMoEtmhVfu3MxCUZ9fo2AHWCigwT9LvVz1eFb';
let votey = "alexmove";

	//for (var yyy = 0; yyy < 2; yyy++)
    
	var d = new Date(); // Today!
	d.setDate(d.getDate()-num_day); // Yesterday!
	d = d.toJSON().split("T")[0];
	d = d.replace(/-/gi, '');
	

let accounts = fs.readFileSync('report'+d+'.txt').toString()
	
		var currentPath = process.cwd();
console.log(currentPath);
console.log(__dirname+"aaareport");
// Prints: /Users/mjr
//console.log(path.dirname(__filename));
// Prints: /Users/mjr

//let accounts = fs.readFileSync('report20211225.txt').toString();

accounts = accounts.replace(/\n\n/gi, '\n');
							
console.log(accounts);

let permlink = new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();

console.log(permlink);
let title = "Test Mode Report Everyday"+ title_name +"Checking The Uniqueness "+d;


steem.broadcast.comment(
	wifkey, // Your posting wif
	'', // Parent Author
	hive_name, // Parent Permlink
	votey,
	permlink, // Your post permlink
	title, // Title
	accounts, // Body 	
		{ tags: ['steem','club5050','steemit','ukraine','js','games'], app: 'ganeshaway' }, // Json Metadata
		function(err, result) {
			console.log(err, result)});



