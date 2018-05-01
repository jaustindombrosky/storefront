var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3000,
	user: "root",
	password: "",
	database: "storefront"
})

var buy = function(){
	connection.query('SELECT * FROM products', function(err, res){
		var table = new Table({
			head: ['ID', 'PRODUCTNAME', 'DEPARTMENT', 'PRICE', 'STOCK']
		});
		console.log("ITEMS FOR SALE!!!");
		console.log("-----------------");
		for(var i = 0; i < res.length; i++){
			table.push([res[i].id, res[i].ProductName, res[i].DepartmentName, res[i].Price.toFixed(2), res[i].StockQuantity]);
		}
		console.log("-----------------");
		console.log(table.toString());
		inquirer.prompt([{
			name: "itemId",
			type: "input",
			message: "What would you like to buy?",
			validate: function(value){
				if (isNaN(value) == false){
					return true;
				} else {
					return false;
				}
			}
		}, {
			name: "Quantity",
			type: "input",
			message: "How many would you like to buy?",
			validate: function(value){
				if (isNaN(value) == false){
					return true;
				} else {
					return false;
				}
			}
		}]).then(function(answer){
			var chosenId = answer.itemId -1
			var chosenProduct = res[chosenId]
			var total = parse
		})
	})
}
//asks if they would like to purchase another item
function reprompt(){
	inquirer.prompt([{
	  type: "confirm",
	  name: "reply",
	  message: "Would you like to purchase another item?"
	}]).then(function(ans){
	  if(ans.reply){
		start();
	  } else{
		console.log("See you soon!");
	  }
	});
  }
  
  start();