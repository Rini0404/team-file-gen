const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const render = require('./src/page-template')
const employeeArray = [];
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'index.html');



// change later? (answers)
    const rolePrompts = () => {
      // messages to get data in inquirer
      inquirer.prompt([{
        type: 'list',
        name: 'employeeRole',
        message: 'Now who do you want to add?',
        choices: ['Engineer', 'Intern', 'Im done.']
      }
      ])
      .then ((answers) => {
        // if (answers.employeeRole === 'Manager') {
        //   managerPrompts(); // adds the data to the function of managerPrompts later
        if (answers.employeeRole === 'Engineer'){
          engineerPrompts(); // same 
        } else if (answers.employeeRole === 'Intern'){
          internPrompts(); 
        } else {
          let data = render(employeeArray);
          // write file 
          fs.writeFile('index.html', data, (err) => {
            if (err) throw err; 
            console.log('Congrats! You have saved your entry!')
        })
        }
        
      });
    }

// console.log(rolePrompts);

    const managerPrompts = () => {
      inquirer.prompt([
        {
        type: 'input',
        name: 'managerName',
        message: 'What is your name?'
        },
        {
        type: 'input',
        name: 'managerId',
        message: 'What is your ID?'
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: 'What is your email address?'
        },
        {
          type: 'input',
          name: 'managerOfficeNumber',
          message: 'What is your office number?'
        },
        // add another employee
  
      ])

      .then((answers) => {
        // grab all data, 
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        // add to the array .push
        employeeArray.push(manager);
        // if yes is hit on adding a new employee, run if conditional
      
          rolePrompts(); // run the  function here
  
      })

    };
  


    const engineerPrompts = () => {
      // inq 

      inquirer.prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: 'What is your name?', 

        },
        {
          type: 'input',
          name: 'engineerId',
          message: 'What is your Id?', 

        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: 'What is your Email address?'  

        },
        {
          type: 'input',
          name: 'engineerGithub',
          message: 'What is your Github username?', 

        },
      
      ])  
      .then((answers) => {
        // grab all data, 
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        // add to the array .push
        employeeArray.push(engineer);
        // if yes is hit on adding a new employee, run if conditional
        
          rolePrompts(); // run the firts function here
        
          // write file
      })
    };
    



    const internPrompts = () => {
      // inq
      inquirer.prompt([
        { 
          type: 'input',
          name: 'internName',
          message: 'What is your name?'
        },
        { 
          type: 'input',
          name: 'internId',
          message: 'What is your ID?'
        },
        { 
          type: 'input',
          name: 'internEmail',
          message: 'What is your email address?'
        },
        { 
          type: 'input',
          name: 'internSchool',
          message: 'What school do you currently attend?'
        },
        
      ])
      .then((answers) => {
        // grab all data, 
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        // add to the array .push
        employeeArray.push(intern);
        // if yes is hit on adding a new employee, run if conditional
          rolePrompts(); // run the  function here

          // write file 
      })
    }
  
    managerPrompts();

