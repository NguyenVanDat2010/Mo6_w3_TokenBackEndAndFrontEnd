create database test_token;

use test_token;

create table users(id int auto_increment primary key, username varchar(200), email varchar(200), password varchar(250));

create table roles(id int auto_increment primary key, name varchar(200));

create table user_roles(user_id int, role_id int, primary key (user_id, role_id));
