const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
  {
    name: 'title',
    type: 'input',
    message: 'Please enter the title of your project',
  },
  {
    name: 'description',
    type: 'input',
    message: 'How would you describe your project?',
  },
  {
    name: 'installationInstructions',
    type: 'input',
    message: 'Please list any required packages for installation',
  },
  {
    name: 'usageInformation',
    type: 'input',
    message: 'How is your application used?',
  },
  {
    name: 'contributionGuidelines',
    type: 'input',
    message: 'What are the guidelines for contributing?',
  },
  {
    name: 'testInstructions',
    type: 'input',
    message: 'Please enter any necessary information for testing.',
  },
  {
    name: 'license',
    type: 'list',
    message: 'Please select the appropriate license.',
    choices: ['MIT', 'Apache2.0', 'GPL3.0', 'BSD3', 'None'],
  },
  {
    name: 'gitHubUserName',
    type: 'input',
    message: 'Please enter your GitHub UserName',
  },
  {
    name: 'emailAddress',
    type: 'input',
    message: 'Please enter your email address',
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), '/dist', fileName), data);
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile('README.md', generateMarkdown(answers));
  });
}

init();
