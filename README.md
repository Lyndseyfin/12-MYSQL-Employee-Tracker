# 12-MYSQL-Employee-Tracker

# Description


# Table of Contents
1. [Title](Title)
2. [Description](#description)
3. [Installation](#installation)
4. [Contributing](#contribution)
5. [Questions](#questions)
6. [License](#demo)
7. [MySQL](#mysql)
8. [Screenshot](#screenshot)
# Installation 
I used 'npm i' to insall all required pacakages.
# Contribution
Myself
# Questions
## GitHub 
 Lyndseyfin
## Email 
 lyndseyfinamore@gmail.com
## License
![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen)
## MySQL
<a href="">Employee Tracker</a>

## Screenshot
![screenshot]()

const empSearch = () => {
  connection.query(`SELECT * FROM employee`, (err, res) => {

    if (err) throw err;

    if (res.length > 0) {
      console.log('\n')
      console.log('** employee **')
      console.log('\n')
      console.table(res);
    }
    //display questions again
    runSearch();
  })
};

const depSearch = () => {
  connection.query(`SELECT * FROM department`, (err, res) => {
    if (err) throw err;

    if (res.length > 0) {
      console.log('\n')
      console.log(' ** department **')
      console.log('\n')
      console.table(res);
    }

    runSearch();
  });
};

const roleSearch = () => {
  connection.query(`SELECT  * FROM empRole`, (err, res) => {

    if (err) throw err;

    if (res.length > 0) {
      console.log('\n')
      console.log(' ** empRole **')
      console.log('\n')
      console.table(res);
    }
  
    runSearch();
  });
};

