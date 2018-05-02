var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "storefront"
})

function displayAll() {
	connection.query('SELECT * FROM table', function(error, response) {
			if (error) { console.log(error) };
			var showTable = new Table({
					head: ['ID', 'PRODUCTNAME', 'DEPARTMENT', 'PRICE', 'STOCK'],
					colWidths: [15, 15, 15, 15, 15]
			});
			for (i = 0; i < response.length; i++) {
					showTable.push(
							[response[i].ItemID, response[i].ProductName, response[i].DepartmentName, response[i].Price, response[i].StockQuantity]
					);
			}
			console.log(showTable.toString());
			firstPurchase();
	});
};
function firstPurchase() {
	inquirer.prompt([
			{
					name: "ID",
					type: "input",
					message: "What item number would you like to purchase?"
			}, {
					name: 'Quantity',
					type: 'input',
					message: "How many would you like to purchase?"
			},

	]).then(function(answers) {
			var quantityDesired = answers.Quantity;
			var IDDesired = answers.ID;
			purchaseFromDatabase(IDDesired, quantityDesired);
	});
};
function purchaseFromDatabase(ID, quantityNeeded) {
	connection.query('SELECT * FROM table WHERE ItemID = ' + ID, function(error, response) {
			if (error) { console.log(error) };
			if (quantityNeeded <= response[0].StockQuantity) {
					var totalCost = response[0].Price * quantityNeeded;
					console.log("Order Updated!");
					console.log("Your total is " + quantityNeeded + " " + response[0].ProductName + " is " + totalCost + ". Thank you for Shopping!");
					connection.query('UPDATE Products SET StockQuantity = StockQuantity - ' + quantityNeeded + ' WHERE ItemID = ' + ID);
			} else {
					console.log("Out of Stock " + response[0].ProductName + " to fulfill your order.");
			};
			displayAll();
	});
};
displayAll();