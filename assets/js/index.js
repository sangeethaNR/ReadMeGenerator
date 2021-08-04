// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ['Enter your Project Title','Provide a short description explaining the what, why, and how of your ',
                   'What are the steps required to install your project? Provide a step-by-step description',
                    'Provide instructions and examples for use','License'];
                 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {


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
        type: 'input',
        message: questions[4],
        name: 'license',
      }

    ])


}

// Function call to initialize app
init();
