// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('You need to enter a title for your project!');
              return false;
            } 
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to provide a description of your project!');
              return false;
            } 
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        validate: installationInput => {
            if (installationInput) {
              return true;
            } else {
              console.log('You need to provide installation requirements for your project!');
              return false;
            } 
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('You need to provide usage instructions for your project!');
              return false;
            } 
        }

    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Provide guidelines for other users to contribute to your project.',
        validate: contributionsInput => {
            if (contributionsInput) {
              return true;
            } else {
              console.log('You need to provide contribution guidelines for your project!');
              return false;
            } 
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Provide examples on how to run tests on your project.',
        validate: testingInput => {
            if (testingInput) {
              return true;
            } else {
              console.log('You need to provide testing information for your project!');
              return false;
            } 
        }

    },
    {
        type: 'list',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Mozilla Public License 2.0', 'No License'],
        message: 'What license does your project have?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please provide your GitHub username!');
              return false;
            } 
        }

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please provide your email address!');
              return false;
            } 
        }
    }
];

// TODO: Create a function to write README file
const writeFile = data => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', data, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'README File created!'
        });
      });
    });
};
  
// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
    .then((data) => {
        writeFile(generateMarkdown(data), "README.md");
    });
};
  
// Function call to initialize app
init();
