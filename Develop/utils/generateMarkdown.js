// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    return '![License](https://img.shields.io/badge/License-${license}-blue.svg)'
  }
  if (license === 'GNU General Public License v3.0') {
    return '![License: GPL v3](https://img.shields.io/badge/License-${license}-blue.svg)'
  }
  if (license === 'MIT License') {
    return '![License: MIT](https://img.shields.io/badge/License-${license}-yellow.svg)'
  }
  if (license === 'Mozilla Public License 2.0') {
    return '![License: MPL 2.0](https://img.shields.io/badge/License-${license}-brightgreen.svg)'
  }
  if (license === 'No License') {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'No License') {
    return ''
  } else {
    return '* [License](#license)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Testing](#testing)
  ${renderLicenseLink(data.license)}
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Testing
  ${data.testing}

  ${renderLicenseSection(data.license)}

  ## Questions
  For any questions regarding this or any other project created by ${data.github}, please contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;
