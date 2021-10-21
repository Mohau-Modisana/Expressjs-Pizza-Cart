create table Costumers(
	id integer primary key AUTOINCREMENT,
	Names text not null,
    Contacts integer default 0,
    Locations text not null
);