// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        message: "What is the title name of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a detailed description for your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Please enter installation instructions for your project.",
        name: "installation"
    },
    {
        type: "input",
        message: "Please enter usage information for your project",
        name: "usage"
    },
    {
        type: "input",
        message: "Please enter the guidelines for contributions to your project",
        name: "contributions"
    },
    {
        type: "input",
        message: "Please enter test instructions for your project",
        name: "test"
    },
    {
        type: "list",
        message: "Please select a license for your project",
        name: "license",
        choices: ["None", "GNU GPLv3", "MIT License","Apache"]
    },
    {
        type: "input",
        message: "Please enter your GitHub username",
        name: "github"
    },
    {
        type: "input",
        message: "Please enter your email address",
        name: "email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile(fileName, generateMarkdown(data), (err) =>
            err ? console.log(err) : console.log('Readme File successfully created')
        )
    }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('generatedREADME.md', answers)
    })
}

// Function call to initialize app
init();
