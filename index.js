const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const inquirer = require('inquirer');
const fs = require('fs');

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How should your project be used?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license will you be using for your project?',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are your contribution guidelines?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions for your project?',
  },
];

function generateReadme(answers) {
  return `
# ${answers.title}

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

[![License](https://img.shields.io/badge/License-${
    answers.license
  }-brightgreen.svg)](https://opensource.org/licenses/${answers.license})
  
This project is licensed under the ${answers.license} license.

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

If you have any questions or comments, please contact ${
    answers.github
  } at ${answers.email}.
`;
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateReadme(answers);
    fs.writeFile('README.md', readmeContent, (err) =>
      err
        ? console.error(err)
        : console.log('README file generated successfully!')
    );
  });
}

init();
