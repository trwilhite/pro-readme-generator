# Node.js Challenge: Professional README Generator

## User Story
```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Description
For this challenge we were given a starter code (found at: https://github.com/coding-boot-camp/potential-enigma) to begin creating our application. The application uses node.js to allow users to quickly and efficiently create a README.md file without having to format it. It uses Inquirer and FileStore npm packages in order to prompt users for input and then write and create the README.md file. This application is invoked using the command line interface. Once the user answers all prompted questions, their README.md file will display in the dist folder which is nested within the develop folder. We were also required to create a video walkthrough/demo of this application, which is linked below.

## Built With
* JavaScript
* Node.js
* Inquirer

## Demo
Click the following link to view a demo of the application: https://watch.screencastify.com/v/lvS9S0VkeDbJmeujGnkl

## Contributions
Made with ❤️️ by Tamara Wilhite