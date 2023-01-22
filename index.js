// things that are required
const inquirer = require('inquirer');
const fs = require('fs');

// list of team members
let team = [];

// validate input
const validateInput = (nameInput) => nameInput ? true : (console.log("Please enter a value"), false);

// manager questions
const manager = [
    {
        type: 'input',
        message: "Manager's name?",
        name: 'name',
        default: 'Manager',
        validate: validateInput,

    },
    {
        type: 'input',
        message: "Manager's ID#?",
        name: 'id',
        default: '001',
        // if id isNAN, console.log
        validate: id => {
            if(isNaN(id)) {
                console.log("Please return a numeric ID#")
            } else {
                return true;
            }
        },

    },
    {
        type: 'input',
        message: "Manager's email?",
        name: 'email',
        default: 'default@default.com',
        validate: validateInput,

    },
    {
        type: 'input',
        message: "Manager's Office Number?",
        name: 'officeNumber',
        default: '555-555-5555',
        validate: validateInput,
    },
];

const engineer = [
    {
        type: 'input',
        message: "Engineer's name?",
        name: 'name',
        default: 'Engineer',
        validate: validateInput,

    },
    {
        type: 'input',
        message: "Engineer's ID#?",
        name: 'id',
        default: '002',
        // if id isNAN, console.log
        validate: id => {
            if(isNaN(id)) {
                console.log("Please return a numeric ID#")
            } else {
                return true;
            }
        },

    },
    {
        type: 'input',
        message: "Engineer's email?",
        name: 'email',
        default: 'default@default.com',
        validate: validateInput,

    },
    {
        type: 'input',
        message: "Engineer's Github Username?",
        name: 'github',
        default: 'github',
        validate: validateInput,
    },

    
]


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(manager)


//console logs input
    .then((data) => {
       // writeToFile('yourREADME.md', generateMarkdown(data));
        
        console.log(data);
    });
    
}

// Function call to initialize app
init();