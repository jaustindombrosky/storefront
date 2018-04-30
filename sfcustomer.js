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
                head: ["Item ID", "Product Name", "Department Name", "Price", "Stock Quantity"] 
                colWidths: [15, 15, 15, 15, 15],
            });
            for(var i = 0; i < res.length; i++){
                table.push(
                    [res[i].itemID, res[i].ProductName, res[i].DepartmentName, parseFloat(res[i].Price).toFixed(2), res[i].StockQuantity]
                );
            }
            console.log(table.toString());
    })
}

function exit(){
    connection.end();
    console.log("Thank you for your business!");
}
selection();