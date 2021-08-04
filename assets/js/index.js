// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ['Enter your Project Title','Provide a short description explaining the what, why, and how of your ',
                   'What are the steps required to install your project? Provide a step-by-step description',
                    'Provide instructions and examples for use','License'];
                 

// TODO: Create a function to write README file
function writeToFile(data) {


    
        const responseObj = JSON.parse(data);
        const filetext =`<!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
          </head>
          <body>
           <h1> Welcome ${data.name}</h1>
        <ul>
        <li> Your location : ${data.description}</li>
        <li> Your Bio : ${data.install}</li>
        <li> <a href='${responseObj.example}' target="_blank">LinkedIn</a><li>
        <li> <a href='${responseObj.license}' target="_blank"> Github</li>
        </ul>  
            
         </body>
          </html>`
          fs.writeFile('index.html', filetext);
          return ;
        
       
          
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: questions[0],
        name: 'name',
      },
      {
        type: 'input',
        message: questions[1],
        name: 'description',
      },
      {
        type: 'input',
        message: questions[2],
        name: 'install',
      },
      {
        type: 'input',
        message: questions[3],
        name: 'example',

      },
      {
        type: 'list',
        message: questions[4],
        name: 'license',
        choices:['MIT','GNU','Apache 2.0'],
      }

    ])
    .then((response) =>
        //console.log(JSON.stringify(response));
   //console.log(JSON.stringify(response));
   fs.writeFile('README.md', writeToFile(JSON.stringify(response)), (err) =>
   err ? console.error(err) : console.log('you have successfully saved the info!')
 
  ));
    }


// Function call to initialize app
init();
