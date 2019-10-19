drop database projetoPartiu;
create database projetoPartiu;
use projetoPartiu;
 

create table endereco(
    id int auto_increment not null,
    logradouro varchar(100) not null,
	numero varchar(10) not null,
	complemento varchar(10),
    bairro varchar(50) not null,
    cidade varchar(50) not null,
    uf varchar(2) not null,
    cep varchar(8) not null,
    primary key(id)
) ENGINE=InnoDB;

create table usuario(
	id int not null auto_increment,
	tipo varchar(50) not null,
	cpf long,
    nome varchar(50) not null,
    dta_nascimento date,
    email varchar(50) not null unique,
    ddd varchar(11),
    telefone varchar(9),
    genero char,
    senha varchar(200) not null,
    endereco int,   
    primary key(id),
    foreign key (endereco) references endereco(id)
);

create table restaurante(
	cnpj varchar(14) not null,
	codigo_cardapio varchar(5) not null,
    razao_social varchar(100) not null,
    nom_fantasia varchar(100) not null,
    id_endereco int not null,
    qtd_mesas int(2) not null,
    logotipo LONGBLOB,
    descricao varchar(700),
    status char not null,
    primary key (cnpj),
    foreign key (id_endereco) references endereco(id)
);

create table horario_restaurante(
	cnpj_restaurante varchar(14) not null,
    dia_semana int(1) not null,
    hra_entrada TIME not null,
    hra_fim TIME not null,
    foreign key (cnpj_restaurante) references restaurante(cnpj)    
);

create table funcionario_restaurante(
	id int not null auto_increment,
	id_funcionario int not null,
	cnpj_restaurante varchar(14),
	primary key(id),
	foreign key(id_funcionario) references usuario(id),
	foreign key(cnpj_restaurante) references restaurante(cnpj)
);



create table especialidade(
	id int not null auto_increment,
	nome varchar(50) not null, 
	primary key (id)
);

create table especialidade_restaurante(
	id int not null auto_increment,
	cnpj_restaurante varchar(14) not null,
    id_especialidade int not null,
    primary key(id),
    foreign key (cnpj_restaurante) references restaurante(cnpj),
    foreign key (id_especialidade) references especialidade(id)
);

create table comanda(
	id int not null auto_increment,
    id_garcom int not null,
    codigo_comanda varchar(10) not null,
    mesa int(2) not null,
    status char not null,
    dta_entrada datetime not null,
    dta_saida datetime,
    dta_atualizacao datetime not null,
    foreign key (id_garcom) references usuario(id),
    primary key (id)
);

create table usuario_comanda(
	id int not null auto_increment,
    cod_usuario int not null,
    cod_comanda int not null,
    foreign key (cod_usuario) references usuario(id),
    foreign key (cod_comanda) references comanda(id),
    primary key (id)
);

create table avaliacao(
	id int not null auto_increment,
    id_cliente int not null,
    id_comanda int not null,
    av_estabelecimento smallint not null,
    av_funcionario smallint not null,
    desc_estabelecimento varchar(200),
    desc_funcionario varchar(200),
    primary key(id),
    foreign key (id_comanda) references comanda (id),
    foreign key (id_cliente) references usuario(id)
);

create table item(
	id int not null auto_increment,
    cnpj_restaurante varchar(14) not null,
    categoria varchar(50) not null,
    detalhe varchar(200),
    nome varchar(100) not null,
    tipo int not null, 
    valor double(10,2) not null,
    status char,
    primary key (id),
    foreign key (cnpj_restaurante) references restaurante (cnpj)
);

create table especialidade_item(
	id int not null auto_increment,
	id_item int not null,
    id_especialidade int not null,
    primary key(id),
    foreign key (id_item) references item(id),
    foreign key (id_especialidade) references especialidade(id)
);

create table pedido(
	id int not null auto_increment,
    id_comanda int not null,
    id_item int not null,
    data datetime not null,
    porc_desconto double(3,3),
    status char not null,
	observacao varchar(200),
    foreign key (id_item) references item(id),
	foreign key (id_comanda) references comanda(id),
    primary key(id)
);

create table usuario_pedido(
	id int not null auto_increment,
    id_usuario int not null,
    id_pedido int not null,
    id_comanda int not null,
    porc_paga double not null,
    status char not null,
    foreign key (id_comanda) references comanda(id),
    foreign key (id_usuario) references usuario(id),
    foreign key (id_pedido) references pedido(id) ON DELETE CASCADE,
    primary key (id)
);