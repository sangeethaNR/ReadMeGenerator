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
        const filetext =`# ${responseObj.name}  
        
        ## Description
        [![MIT License][license-shield]][license-url]

         ${responseObj.description} 
         <!-- TABLE OF CONTENTS -->
         <details open="open">
         <summary>Table of Contents</summary>
         <ol>
         <li><a href='#installation>Installation</a></li>
         <li><a href='#usage>Usage</a></li>
         <li><a href='#credits>Credits</a></li>
         <li><a href='#license>License</a></li>
         <ol>
         </details>

         ## Installation
      ${responseObj.install}
      ## Usage
      ${responseObj.example}
      ## Credits
      
## License
       ${responseObj.license}`
            
         
         
          return filetext ;
        
       
          
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
   fs.appendFile('../../README.md', writeToFile(JSON.stringify(response)), (err) =>
   err ? console.error(err) : console.log('you have successfully saved the info!')
 
  ));
    }


// Function call to initialize app
init();
