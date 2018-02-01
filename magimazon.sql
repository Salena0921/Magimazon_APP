DROP DATABASE IF EXISTS magimazonDB;

CREATE DATABASE magimazonDB;

USE magimazonDB;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(55) NOT NULL,
    author VARCHAR(55) NULL,
    department_name VARCHAR(55) NOT NULL,
    muggle_price DECIMAL(10,2) NOT NULL,
    wizard_price VARCHAR(55),    
    stock_quantity INT NOT NULL
	);
    
SELECT * FROM products;

INSERT INTO products (product_name, author, department_name,  muggle_price, wizard_price, stock_quantity)
VALUES ("Fantastic Beasts and Where to Find Them", "Newt Scamander", "Textbooks", 27.09, "5 Galleons, 10 Sickles, 22 Knuts", 20);

INSERT INTO products (product_name, department_name,  muggle_price, wizard_price, stock_quantity)
VALUES ("Standard Size 2 Pewter Cauldron", "Cauldrons", 36.71, "7 Galleons, 10 Sickles, 22 Knuts", 5);

INSERT INTO products (product_name, department_name,  muggle_price, wizard_price, stock_quantity)
VALUES ("Silver Cauldron", "Cauldrons", 71.01, "14 Galleons, 13 Sickles, 0 Knuts", 2);

INSERT INTO products (product_name, author, department_name,  muggle_price, wizard_price, stock_quantity)
VALUES ("A History of Magic", "Bathilda Bagshot", "Textbooks", 28.99, "6 Galleons, 0 Sickles, 13 Knuts", 15); 

INSERT INTO products (product_name, author, department_name,  muggle_price, wizard_price, stock_quantity)
VALUES ("Magical Drafts and Potions", "Arsenius Jigger", "Textbooks", 32.65, "6 Galleons, 13 Sickles, 12 Knuts", 30);      

INSERT INTO products (product_name, department_name,  muggle_price, wizard_price, stock_quantity)
VALUES ("Unicorn Horn", "Apothecary", 101.00, "21 Galleons", 10);

INSERT INTO products (product_name, department_name,  muggle_price, wizard_price, stock_quantity)
VALUES ("Wolfsbane", "Apothecary", 48.10, "1 Galleons", 10);

INSERT INTO products (product_name, department_name,  muggle_price, wizard_price, stock_quantity)
VALUES ("Acromantula Venom", "Apothecary", 480.98, "100 Galleons per pint", 2);

INSERT INTO products (product_name, department_name,  muggle_price, wizard_price, stock_quantity)
VALUES ("Dragon Blood", "Apothecary", 57.72, "12 Galleons per pint", 20);

INSERT INTO products (product_name, department_name,  muggle_price, wizard_price, stock_quantity)
VALUES ("Rose Thorns", "Apothecary", 14.43, "3 Galleons per oz", 30)
