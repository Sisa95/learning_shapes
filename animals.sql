create table names(
    id serial not null primary key,
    name text not null
);

create table challenge(
    id serial not null primary key,
    name_id int,
    level int,
    percentage int,
    foreign key(name_id)references names(id)
);

insert into names(name) values ('Kamo');
insert into names(name) values ('Anda');
insert into names(name) values ('Zama');
insert into names(name) values ('Tom');

-- database name animal_game