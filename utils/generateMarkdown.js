// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'GNU GPLv3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break
    case 'MIT License':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break
    case 'None':
      return ''
      break
  }   
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch(license){
      case 'GNU GPLv3':
        return '[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)'
        break
      case 'MIT License':
        return '[MIT License](https://choosealicense.com/licenses/mit/)'
        break
      case 'Apache':
          return '[Apache](https://www.apache.org/licenses/LICENSE-2.0)'
          break
      case 'None':
          return ''
          break  
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `## License
    This project is licensed by ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contributions)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}
  
  ## Tests
  ${data.test}

  ## Questions
  For questions reach out to the following links below: \n
  -[Email](mailto:${data.email})
  -[GitHub](https://www.github.com/${data.github})

  ${renderLicenseSection(data.license)}

  `;
}

module.exports = generateMarkdown;
