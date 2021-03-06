const inquirer = require('inquirer');
const fs = require('fs');
const methods = require('./methods.js');

const questions = [
    {
        type: 'input',
        message: 'What is your name First and Last (for license)',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What year is it (for license)',
        name: 'year',
    },
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
        choices:['Installation', 'Screenshot', 'Website', 'Credits', 'License'],
       
    },
    {
        type: 'confirm',
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

function init() {

    inquirer.prompt(questions)

.then((response) => {
    console.log(response)
    
    
function generateReadMe () {


    fs.writeFile('README.md', 
`${methods.data.writeTitle(response.title)}  

${methods.data.writeDescription(response.description)}
    

${methods.data.writeTable(response.table)}

${methods.data.writeInstall(response.install)}

${methods.data.writeScreenShot(response.screenshot)}

${methods.data.writeCredits(response.credits)}
    
${methods.data.writeWebsite(response.website)}

${methods.data.writeLicense(response.license, response.name, response.year)}`,
     'utf-8',
     info =>
     console.log('Success')
     )

}

generateReadMe();
});
}

init();
