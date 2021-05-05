const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Levijune20!',
  database: 'empTrackerDB',
});

connection.connect((err) => {
  if (err) throw err;
  runSearch();
});

const runSearch = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all employees',
        'View employees by department',
        'Add an employee\'s',
        'Remove employee\'s',
        'Add Role',
        'Remove Role',
        'Done'
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View employees':
          viewEmployees();
          break;

        case 'View employees by department':
          viewEmployeesByDepartment();
          break;

        case 'View employees by role':
          viewEmployeesByRole();
          break;

        case 'Add employee':
          addEmployee();
          break;

        case 'Remove employee':
          removeEmployees();
          break;

        case 'Remove role':
          removeRole();
          break;

        case 'Done':
          connection.done();
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

const viewEmployees = () => {
  connection.query('SELECT * FROM employees', (err, res) => {
    if (err) throw err;
    console.table(res)
    runSearch();
  });


  const viewEmployeesByDepartment = () => {
    connection.query('SELECT * FROM department', (err, res) => {
      if (err) throw err;
      console.table(res);
      runSearch();
    });

    const viewEmployeesByRole = () => {
      connection.query('SELECT * FROM role', (err, res) => {
        if (err) throw err;
        console.table(res);
        runSearch();
      });
    }
  }
};

const empSearch = () => {
  connection.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title,role.salary,
    CONCAT(manager.first_name ," ", manager.last_name) AS Manager FROM  employee LEFT JOIN role ON employee.role_id=role.id LEFT JOIN employee  manager ON manager.id = employee.manager_id`, (err, res) => {
    // console.log(res);

    if (err) throw err;

    if (res.length > 0) {
      console.log('\n')
      console.log('** Employees **')
      console.log('\n')
      console.table(res);
    }
    //calls the menu to display questions again
    connection.done();
  })
  };

  const depSearch = () => {
    console.log('Selecting all department...\n');
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        connection.done();
    });
};

const roleSearch = () => {
  console.table('Selecting all role...\n');
  connection.query('SELECT * FROM empRole', (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.table(res);
      connection.done();
  });
};