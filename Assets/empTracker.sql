DROP DATABASE IF EXISTS employeeTracker_DB;
CREATE database employeeTracker_DB;

USE employeeTracker_DB;

CREATE TABLE department (
 id INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(50) NULL,
 PRIMARY KEY (id)
);

CREATE TABLE role (
   id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL (10.5) NULL,
  department_id INT NOT NULL
  PRIMARY KEY (id),

);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM department;
select * from role;
select * from employee;
