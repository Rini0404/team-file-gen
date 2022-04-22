const fs = require('fs');
const path = require('path');

const render = (employees) => {
  let team = '';

    // switch ase for each employee 
    employees.forEach((employee) => {
      switch(employee.getRole()) {
        case "Manager" : 
        team += `
        <div class="card w-96 bg-base-100 shadow-xl m-6  ">
      <div class="card-header min-h-12 bg-blue-400 text-center">
        <h2>Name: ${employee.getName()}</h2>
        <h2>Title:${employee.getRole()}</h2> </h2>
        <h2>📝</h2>
      </div>
        <div class="card-body">
          <p class = "group-item">ID:${employee.getId()} </p>
          <p class = "group-item">Email:${employee.getEmail()}</p>
          <p class = "group-item">Office number:${employee.getEmail()}</p>
          </div>
        </div>        
         `; //make sure to add ;

         break; // next 
          case  "Engineer": 
            team += `
            <div class="card w-96 bg-base-100 shadow-xl m-6 ">
        <div class="card-header min-h-12 bg-blue-400 text-center">
            <h2>Name:${employee.getName()}</h2>
            <h2>Title: ${employee.getRole()} </h2>
            <h2>💻</h2>
          </div>
          <div class="card-body">
            <p class = "group-item">ID:${employee.getId()} </p>
            <p class = "group-item">Email:${employee.getEmail()}</p>
            <p class = "group-item"><a href = "https://github.com/Rini0404">Github:${employee.getGithub()}</a></p>
            </div>
        </div>
            `;
            break;
            case 'Intern': 
            team += `
            <div class="card w-96 bg-base-100 shadow-xl m-6 ">
            <div class="card-header min-h-12 bg-blue-400 text-center">
                <h2>Name:${employee.getName()}</h2>
                <h2>Title: ${employee.getRole()}</h2>
                <h2>😎</h2>
              </div>
              <div class="card-body">
                <p class = "group-item">ID: ${employee.getId()}</p> </p>
                <p class = "group-item">Email:${employee.getEmail()}</p>
                <p class = "group-item">School:${employee.getSchool()}</p>
                </div>
            </div> 
            `;
            break;
        default:
        return "Something is wrong.."
      }

    }
);

  const htmlP = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/daisyui@2.14.1/dist/full.css" rel="stylesheet" type="text/css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Encode+Sans&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="./dist/Style.css">
    <title>My Team</title>
  </head>
  <header class = "bg-blue-400 text-center w-full min-h-12 p-8 text-4xl	 text-black		">
    <h1>My Team</h1>
  </header>
  <body>
  <section class = "aye">
    ${team}
    </section>

  </body>
  </html>

`; 
  return htmlP;
}; 
module.exports = render; 