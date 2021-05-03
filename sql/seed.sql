USE empTrackerDB;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager", 120000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("CPA", 150000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Attorney", 175000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Levi", "Collins", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jeremy", "Collins", 2, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Chelsey", "Finamore", 3, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kenzie", "Crane", 4, 4);
