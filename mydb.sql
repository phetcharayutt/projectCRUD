SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;

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