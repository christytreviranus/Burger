-- If database exists, drop it first --
DROP DATABASE IF EXISTS burgers_db;

-- Create bamazon database --
CREATE DATABASE burgers_db;

--Use database for remaining queries --
USE burgers_db;

-- Create products table with columns needed --
CREATE TABLE burgers(

    id INT AUTO_INCREMENT,
    burger_name VARCHAR(150) NOT NULL,
    devoured BOOLEAN default false,
    date TIMESTAMP,
    PRIMARY KEY(id)
);






