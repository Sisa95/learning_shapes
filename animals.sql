create table names(
    id serial not null primary key,
    name text not null
);

create table challenge(
    id serial not null primary key,
    name_id int,
    percentage int,
    foreign key(name_id)references names(id)
);

insert into names(name) values ('Kamo');
insert into names(name) values ('Anda');
insert into names(name) values ('Zama');
insert into names(name) values ('Tom');

-- database name animal_game

-- want?
-- Have: 3 changes therefore percentage will be 100/3 = 33.33

-- Progress bar starts at 0 then we want to update it by 33 everytime we move to the next level
-- INSERT INTO challenge (name_id, percentage) VALUES (1, 1, 33.33);


-- show me the percentage for level one
INSERT INTO challenge (percentage) VALUES('33.33');
-- make sure that things are linked to the user
SELECT percentage from challenge WHERE name_id = 1;
UPDATE challenge SET percentage = percentage+33.33 WHERE name_id =1;


-- show me the percentage for level two
-- show me the percentage for level three

