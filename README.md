# Docker compose is cash I'm so sorry
# Thisproject 

# Crate database 


CREATE DATABASE IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `mydb`;

CREATE TABLE `user` (

    `id` int(11) NOT NULL AUTO_INCREMENT,
    `username` varchar(50) NOT NULL ,
    `password` TEXT NOT NULL,
    `firstname` varchar(50) NOT NULL,
    `lastname` varchar(50) NOT NULL,
    PRIMARY KEY(id),UNIQUE KEY(username)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

# server prot 3333

`npm install`

`npm start`

# server prot 3000

`npm install`

`npm start`
