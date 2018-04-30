var mysql = require("mysql");
var request = require("request");
var sub = require("sub");
var bTable = require("table");
var keys = require("./keys.js");
var connection = mysql.createConnection(key.connection);

connection.connect(function(err){
    if (err) throw err;
});

function selection(){
    connection.query("SELECT * FROM products", function(err, res){
       if (err) throw err;
            var table = new bTable({
                head: [""]
            });
    })
}

function exit(){
    connection.end();
    console.log("Thank you for your business!");
}
selection();