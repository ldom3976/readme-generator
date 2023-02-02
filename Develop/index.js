// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('utils');

const generateMarkdown = require('./utils/generateMarkdown');
const { title } = require('process');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "What is the description of the project?",
    name: "Description"
}, {
    type: "input",
    message: "What is your Github username?",
    name: "Username"
},{
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents"
}, {
    type: "input",
    message:"What is the User Story?",
    name: "User"
}, {
    type: "input",
    message: "What are the installation instructions?",
    name: "Installation"
}, {
    type: "input",
    message: "Testing?",
    name: "Testing"
}, {
    type: "input",
    message: "Contributors?",
    name: "Contributors"
}, {
    type: "input",
    message: "What licenses should the project have?",
    choices: ['MIT', 'GPL', 'Apache 2.0', 'None'],
    name: "License"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log ("Success!")
        }
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
