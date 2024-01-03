create table Usuarios(
id int primary  key,
usuario varchar(200),
email varchar(50),
telefone varchar(15)
);

create table Produtos(
id int primary key,
quantidade int,
categoria varchar(100),
nome varchar(50),
preco float,
descricao varchar(50),
imagem varchar(200)
);

create table Cadastrar(
id_produto int references Produtos(id),
id_usuario int references Usuarios(id)
);
