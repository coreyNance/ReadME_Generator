// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const methods = require('./methods.js');
// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title',
    },
    { 
        type: 'input',
        message: 'What is the Description?',
        name: 'description',
    },
    {
        type: 'checkbox',
        message: 'What is Table of Contents?',
        name: 'table',
        checked: true,
        choices:['Installation', 'Screenshot', 'Website', 'Credits', 'License'],
       
    },
    {
        type: 'input',
        message: 'Do you want installation instructions?',
        name: 'install',
    },
    {
        type: 'confirm',
        message: 'Do you want a Screenshot?',
        name: 'screenshot',
    },
    {
        type: 'confirm',
        message: 'Do you want to add Credits?',
        name: 'credits',

    },
    {
        type: 'confirm',
        message: 'Do you want to include a website link',
        name: 'website',
    },
    {
        type: 'list',
        message: 'Please choose a license',
        name: 'license',
        choices: ['BOOST', 'MIT', 'UNLICENSE'],
    }
];

inquirer.prompt(questions)

.then((response) => {
    console.log(response)
    

    if(response.license !== '') {
        methods.data.writeLicense(response.license);
    }
    
// function generateReadMe () {


    fs.writeFile('readMe.md', 
`${methods.data.writeTitle(response.title)}  

${methods.data.writeDescription(response.description)}
    

${methods.data.writeTable(response.table)}

${methods.data.writeInstall(response.install)}

${methods.data.writeScreenShot(response.screenshot)}

${methods.data.writeCredits(response.credits)}
    
${methods.data.writeWebsite(response.website)}

${methods.data.writeLicense(response.license)}
    
`,
     'utf-8',
     info =>
     console.log('Success')
     )

// }
});




// // - 
// // - 
// // TODO: Create a function to write README file
function writeToFile(fileName, data) {



}

// // TODO: Create a function to initialize app
function init() {}

// // Function call to initialize app
init();








//                                                TASKS

// Need to fix  questions so that they are more of what the user wants
// get image to render in generated readme
// update web link to repo of this project
// find out what funciton init is all about 
// need to wrap generate readme into a function
// find out what require console is on method.js
// need to get user name and year and feed into license 
// clean up all commented code in license.js
// clean up all commented code in methods.js
// clean up all commented code in index.js
// remember to make video of code
