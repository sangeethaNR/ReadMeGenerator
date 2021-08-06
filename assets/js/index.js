// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const markdown =require('generateMarkdown');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ['Enter your Project Title','Provide a short description explaining the what, why, and how of your ',
                   'What are the steps required to install your project? Provide a step-by-step description',
                    'Provide instructions and examples for use','What License is being used? (ie...MIT)','Who contributed to this project','What commands are needed to test this app?','What is your GitHub Username?','Please enter your e-mail address'];
                 

// TODO: Create a function to write README file
function writeToFile(data) {


    
        const responseObj = JSON.parse(data);
        const licenseBadge_link = generateMarkdown(`${responseObj.license}`);
       
        const filetext =`
# ${responseObj.name}  
${licenseBadge_link}   
## Description
${responseObj.description} 
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#username)
- [Contact](#contact)
## Installation
      ${responseObj.install}
## Usage
      ${responseObj.example}
## Credits
## License
${licenseBadge_link}
This application is covered by the ${responseObj.license} license.
## Contributing
${responseObj.contibution}
<br />
## Testing
${responseObj.testing}
## 🙋‍♀️ Questions
 GitHub : <a href = "https://github.com/${responseObj.username}">💻</a>
## Contact
 You can reach me at <a href="mailto:${responseObj.contact}"> ✉️ </a> `
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
        choices:['MIT','GNU','Mozilla','ISC'],
      },
      {
        type: 'input',
        message: questions[5],
        name: 'contibution',

      },
      {
        type: 'input',
        message: questions[6],
        name: 'testing',

      },
      {
        type: 'input',
        message: questions[7],
        name: 'username',

      },
      {
        type: 'input',
        message: questions[8],
        name: 'contact',

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
