CREATE DATABASE CrystalMind;
USE CrystalMind;

create table usuario (
	id int primary key auto_increment,
	primeiro_nome varchar(45),
    sobrenome varchar(45),
    email varchar(45),
    senha varchar(45)
);

select * from usuario;
truncate usuario;


