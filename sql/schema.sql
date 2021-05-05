DROP DATABASE IF EXISTS empTrackerDB;
CREATE database empTrackerDB;

USE empTrackerDB;

CREATE TABLE department (
 ID INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(50) NULL,
 PRIMARY KEY (ID)
);

CREATE TABLE role (
  ID INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL (10.5) NULL,
  department_id INT NOT NULL
  PRIMARY KEY (ID),

);

CREATE TABLE employee (
  ID INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (ID)
);

SELECT * FROM empTrackerDB;
SELECT * FROM empTrackerDB.department;
SELECT * FROM empTrackerDB.role;
SELECT * FROM empTrackerDB.employee;
