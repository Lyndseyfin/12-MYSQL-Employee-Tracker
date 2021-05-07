DROP DATABASE IF EXISTS empTrackerDB;
CREATE database empTrackerDB;

USE empTrackerDB;

CREATE TABLE department (
 id INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(30) NOT NULL,
 PRIMARY KEY (id)
);

CREATE TABLE empRole (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL (10,2),
  department_id INT NOT NULL
  PRIMARY KEY (id),

);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT DEFAULT NULL,
  PRIMARY KEY (id)
);

-- SELECT * FROM empTrackerDB.department;
-- SELECT * FROM empTrackerDB.empRole;
-- SELECT * FROM empTrackerDB.employee;
