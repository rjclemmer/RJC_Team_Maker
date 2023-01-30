// things that are required
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createHTML = require('./src/createHTML');

// list of team members. Input is pushed into blank array
const team = [];

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
// engineer questions
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

    
];

// add engineer function
function addEngineer() {
    inquirer.prompt(engineer)
    .then((data) => {
        team.push(new Engineer(data.name, data.id, data.email, data.github));
        createTeam();

    })
    
}
// intern questions
const intern = [
    {
        type: 'input',
        message: "Intern's name?",
        name: 'name',
        default: 'Intern',
        validate: validateInput,

    },
    {
        type: 'input',
        message: "Intern's ID#?",
        name: 'id',
        default: '003',
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
        message: "Intern's email?",
        name: 'email',
        default: 'default@default.com',
        validate: validateInput,

    },
    {
        type: 'input',
        message: "Intern's school?",
        name: 'school',
        default: 'School of Hard Knocks',
        validate: validateInput,
    },
];

// add intern function

function addIntern() {
    inquirer.prompt(intern)
    .then((data) => {
        team.push( new Intern(data.name, data.id, data.email, data.school));
        createTeam();
    })

    
};

// writefile
function writeToFile(data) {
    fs.writeFile('./dist/yourTeam.html', data, (err) =>
    err ? console.log(err) : console.log("Your Team File has been made!"))
}

// create team function
function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            message:'Please select an option:',
            name: 'nextOption',
            choices: ['Add Engineer', 'Add Intern', 'Team Complete'],
        },
    ])
    //options for createTeam function - Team Complete writes the file
    .then((input)=>{
        if (input.nextOption === 'Add Engineer') {
            addEngineer();
        } else if (input.nextOption === "Add Intern") {
            addIntern();
        } else if (input.nextOption === "Team Complete") {
            let html = createHTML(team);
            writeToFile(html);
            console.log(team);
        }
      }            
    )
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(manager)
    


//console logs input
    .then((data) => {
        data.role = "Manager";
        team.push(new Manager(data.name, data.id, data.email, data.officeNumber));
       // writeToFile('yourREADME.md', generateMarkdown(data));
        createTeam();
        
    });
    
}

// Function call to initialize app
init();