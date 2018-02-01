var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "magimazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer
        .prompt({
            name: "department",
            type: "list",
            message: "What department are you looking for?",
            choices: ["Textbooks", "Cauldrons", "Apothecary"]
        })
        .then(function (answer) {
            switch (answer.department) {
                case "Apothecary":                    
                    apothecarySearch();
                    break;

                case "Textbooks":
                    textbookSearch();
                    break;

                case "Cauldrons":
                    cauldronSearch();
                    break;

            }
        });
}

function apothecarySearch() {
    var query = "SELECT id, product_name, department_name, muggle_price, stock_quantity FROM products WHERE department_name='Apothecary'";
    var choiceArray = [];
    connection.query(query, function (err, res) {
        if (err) throw err;
        inquirer
            .prompt([{
                    name: "choice",
                    type: "rawlist",
                    choices: function () {
                        for (var i = 0; i < res.length; i++) {
                            choiceArray.push(res[i].product_name);
                        }
                        return choiceArray;
                    },
                    message: "What would you like to order?"
                },
                {
                    name: "quantity",
                    type: "input",
                    message: "How many would you like?"
                }
            ])
            .then(function (answer) {
                var chosenItem;
                for (var i = 0; i < res.length; i++) {
                    if (res[i].product_name === answer.choice) {
                        chosenItem = res[i];
                    }
                }
                if (chosenItem.stock_quantity > parseInt(answer.quantity)) {
                    connection.query(
                        "UPDATE products SET ? WHERE ?", [{
                                stock_quantity: chosenItem.stock_quantity - parseInt(answer.quantity)
                            },
                            {
                                id: chosenItem.id
                            }
                        ],
                        function (error) {
                            if (error) throw err;
                            console.log("Item has been ordered!");
                        }
                    );
                } else {

                    console.log("Sorry we dont have that many");

                }
                runSearch();
            });
    });
};

function textbookSearch() {
    var query = "SELECT id, product_name, author, department_name, muggle_price, stock_quantity FROM products WHERE department_name='Textbooks'";
    var choiceArray = [];
    connection.query(query, function (err, res) {
        if (err) throw err;
        inquirer
            .prompt([{
                    name: "choice",
                    type: "rawlist",
                    choices: function () {
                        for (var i = 0; i < res.length; i++) {
                            choiceArray.push(res[i].product_name);
                        }
                        return choiceArray;
                    },
                    message: "What would you like to order?"
                },
                {
                    name: "quantity",
                    type: "input",
                    message: "How many would you like?"
                }
            ])
            .then(function (answer) {
                var chosenItem;
                for (var i = 0; i < res.length; i++) {
                    if (res[i].product_name === answer.choice) {
                        chosenItem = res[i];
                    }
                }
                if (chosenItem.stock_quantity > parseInt(answer.quantity)) {
                    connection.query(
                        "UPDATE products SET ? WHERE ?", [{
                                stock_quantity: chosenItem.stock_quantity - parseInt(answer.quantity)
                            },
                            {
                                id: chosenItem.id
                            }
                        ],
                        function (error) {
                            if (error) throw err;
                            console.log("Item has been ordered!");
                        }
                    );
                } else {

                    console.log("Sorry we dont have that many");

                }
                runSearch();
            });
    });
};

function cauldronSearch() {
    var query = "SELECT id, product_name, department_name, muggle_price, stock_quantity FROM products WHERE department_name='Cauldrons'";
    var choiceArray = [];
    connection.query(query, function (err, res) {
        if (err) throw err;
        inquirer
            .prompt([{
                    name: "choice",
                    type: "rawlist",
                    choices: function () {
                        for (var i = 0; i < res.length; i++) {
                            choiceArray.push(res[i].product_name);
                        }
                        return choiceArray;
                    },
                    message: "What would you like to order?"
                },
                {
                    name: "quantity",
                    type: "input",
                    message: "How many would you like?"
                }
            ])
            .then(function (answer) {
                var chosenItem;
                for (var i = 0; i < res.length; i++) {
                    if (res[i].product_name === answer.choice) {
                        chosenItem = res[i];
                    }
                }
                if (chosenItem.stock_quantity > parseInt(answer.quantity)) {
                    connection.query(
                        "UPDATE products SET ? WHERE ?", [{
                                stock_quantity: chosenItem.stock_quantity - parseInt(answer.quantity)
                            },
                            {
                                id: chosenItem.id
                            }
                        ],
                        function (error) {
                            if (error) throw err;
                            console.log("Item has been ordered!");
                        }
                    );
                } else {

                    console.log("Sorry we dont have that many");

                }
                runSearch();
            });
    });
};