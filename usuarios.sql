create database portfolio;
use portfolio;
create table usuario(
id_usuario INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR (30) NOT NULL,
senha VARCHAR (50) NOT NULL
);

insert into usuario (email, senha)
values ('admin@senai', '12345');
select * from usuario;