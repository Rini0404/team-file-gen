const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const render = require('./src/page-template')
const employeeArray = [];
const idArray = [];
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'index.html');



// change later? (answers)
    const rolePrompts = () => {
      // questions to get data in inquirer
      inquirer.prompt([{
        type: 'input',
        name: 'employeeRole',
        question: 'What is your role in our company?',
        choices: ['Manager', 'Engineer', 'Intern']
      }
      ])
      .then ((answers => {
        if (answers.employeeRole === 'Manager') {
          managerPrompts(); // adds the data to the funtion of managerPrompts later
        } else if (answers.employeeRole === 'Engineer'){
          engineerPrompts(); // same 
        } else if (answers.employeeRole === 'Intern'){
          internPrompts(); 
        } else (answers.employeeRole === '')
          return 'Select a role!'
      }));


// console.log(rolePrompts);

    const managerPrompts = () => {
      inquirer.prompt([
        {
        type: 'input',
        name: 'managerName',
        question: 'What is your name?'
        },
        {
        type: 'input',
        name: 'managerId',
        question: 'What is your ID?'
        },
        {
          type: 'input',
          name: 'managerEmail',
          question: 'What is your email address?'
        },
        {
          type: 'input',
          name: 'managerOfficeNumber',
          question: 'What is your office number?'
        },
        // add another employee
        {
          type: 'confirm',
          name: 'newEmployee',
          question: 'Would you like to add a new employee?',
        }
      ])

      .then((answers => {
        // grab all data, 
        const Manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        // add to the array .push
        employeeArray.push(Manager);
        console.log(employeeArray);
        // if yes is hit on adding a new employee, run if conditional
        if (answers.newEmployee === true) {
          rolePrompts(); // run the firts function here
        } else {
          let data = render(employeeArray);
          // write file 
          fs.writeFile('index.html', data, (err) => {
            if (err) throw err; 
            console.log('Congrats! You have saved your entry!')
        })
        }
      }))

    };
    managerPrompts(); 


    const engineerPrompts = () => {
      // inq 

      inquirer.prompt([
        {
          type: 'input',
          name: 'engineerName',
          question: 'What is your name?', 

        },
        {
          type: 'input',
          name: 'engineerId',
          question: 'What is your Id?', 

        },
        {
          type: 'input',
          name: 'engineerEmail',
          question: 'What is your Email address?'  

        },
        {
          type: 'input',
          name: 'engineerGithub',
          question: 'What is your Github username?', 

        },
        {
          type: 'confirm',
          name: 'newEmployee',
          question: 'Would you like to add a new employee?', 

        },
      ])  
      .then((answers => {
        // grab all data, 
        const Engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        // add to the array .push
        employeeArray.push(Engineer);
        // if yes is hit on adding a new employee, run if conditional
        if (answers.newEmployee === true) {
          rolePrompts(); // run the firts function here
        } else {
          var data = render(employeeArray);
          // write file 
          fs.writeFile('index.html', data, (err) => {
            if (err) throw err; 
            console.log('Congrats! You have saved your entry!')
        })
        }
      }))
    };
    engineerPrompts(); 



    const internPrompts = () => {
      // inq
      inquirer.prompt([
        { 
          type: 'input',
          name: 'internName',
          question: 'What is your name?'
        },
        { 
          type: 'input',
          name: 'internId',
          question: 'What is your ID?'
        },
        { 
          type: 'input',
          name: 'internEmail',
          question: 'What is your email address?'
        },
        { 
          type: 'input',
          name: 'internSchool',
          question: 'What school do you currently attend?'
        },
        { 
          type: 'confirm',
          name: 'newEmployee',
          question: 'Would you like to add a new Employee?'
        }
      ])
      .then((answers => {
        // grab all data, 
        const Intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        // add to the array .push
        employeeArray.push(Intern);
        // if yes is hit on adding a new employee, run if conditional
        if (answers.newEmployee === true) {
          rolePrompts(); // run the firts function here
        } else {
          var data = render(employeeArray);
          // write file 
          fs.writeFile('index.html', data, (err) => {
            if (err) throw err; 
            console.log('Congrats! You have saved your entry!')
        })
        }
      }))
    }
    internPrompts(); 

  }
rolePrompts();

