// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('README file generated successfully!')
    );
  }
  
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      const readmeContent = `
  # ${answers.title}
  
  ${answers.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  
  ${answers.installation}
  
  ## Usage
  
  ${answers.usage}
  
  ## Credits
  
  ${answers.credits}
  
  ## License
  
  This project is licensed under the ${answers.license} license.
  
  ## Questions
  
  If you have any questions or comments, please contact ${answers.github} at ${answers.email}.
  `;
  
      writeToFile('README.md', readmeContent);
    });
  }
// Function call to initialize app
init();
