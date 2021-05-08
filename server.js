const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Levijune20!',
  database: 'empTrackerDB',
})


function runSearch() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'Please select an option',
      choices: [
        'View employees',
        'View departments',
        'View roles',
        'Add an employee',
        'Add department',
        'Add role',
        'Update role',
        'Done'
      ],
    })
    .then(function(answers) {
      console.log(answers.action)
      switch (answers.action) {
        case 'View employees':
          viewEmployees();
          break;

        case 'View departments':
          viewDepartments();
          break;

        case 'View roles':
          viewRoles();
          break;

        case 'Add an employee':
          addEmployee();
          break;

        case 'Add department':
          addDepartment();
          break;

        case 'Add role':
          addRole();
          break;

        case 'Update role':
          updateRole();
          break;

        case 'Done':
          connection.done();
          break;

        default:
          console.log(`Invalid action: ${answers.action}`);
          break;
      }
    });
};

function viewEmployees() {
  const query = "SELECT * FROM employee";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    runSearch();
  });
}

function viewDepartments() {
  const query = "SELECT * FROM department";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    runSearch();
  });
}

function viewRoles() {
  const query = "SELECT * FROM empRole";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    runSearch();
  });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's first name?",
        name: "first"
      },
      {
        type: "input",
        message: "What is the employee's last name?",
        name: "last"
      },
      {
        type: "input",
        message: "What is the employee's role ID?",
        name: "roleID"
      },
      {
        type: "input",
        message: "What is the employee's manager ID?",
        name: "managerID"
      }
    ])
    .then(function (res) {
      const first = res.first;
      const last = res.last;
      const roleID = res.roleID;
      const managerID = res.managerID;
      const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE("${first}", "${last}", "${roleID}", "${managerID}")`;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
      });
    });
}


function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      message: "What department would you like to add?",
      name: "department"
    })
    .then(function(res) {
      const department = res.department;
      const query = `INSERT INTO department (name) VALUES("${department}")`;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
      });
    });
}


function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What role would you like to add?",
        name: "title"
      },
      {
        type: "input",
        message: "What is the salary for this position?",
        name: "salary"
      },
      {
        type: "input",
        message: "What is the department ID for this position?",
        name: "departmentID"
      }
    ])
    .then(function (res) {
      const title = res.title;
      const salary = res.salary;
      const departmentID = res.departmentID;
      const query = `INSERT INTO empRole (title, salary, department_id) VALUES ("${title}", "${salary}", "${departmentID}")`;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
      });
    });
}

function updateRole() {
  const query = "SELECT id, first_name, last_name, role_id  FROM employee";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    {
      inquirer.prompt({
        type: "input",
        message: "Which employee would you like to update?",
        name: "employee"
      });
    }
  });
}

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  runSearch();
});
