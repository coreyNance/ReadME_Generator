// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const methods = require('./methods.js');
// TODO: Create an array of questions for user input
// inquirer
//     .prompt([
//         {
//             type: 'input',
//             message: 'What is the project title?',
//             name: 'title',
//         },
//         { 
//             type: 'input',
//             message: 'What is the Description?',
//             name: 'description',
//         },
//         {
//             type: 'input',
//             message: 'What is Table of Contents?',
//             name: 'table',
//         },
//         {
//             type: 'input',
//             message: 'What is the installation?',
//             name: 'install',
//         },
//         {
//             type: 'input',
//             message: 'What is the usage',
//             name: 'use',
//         },
// ])
// .then((response) => {
//     console.log(response)
//     fs.writeFile('readMe.md', 
// `# ${response.title}
// ## Description
    
// ${response.description}
    
    
// ## Table of Contents (Optional)
// If your README is long, add a table of contents to make it easy for users to find what they need.
// ${response.table}
//     - [Installation](#installation)
//     - [Screenshot](#screenshot)
//     - [Website](#website)
//     - [Credits](#credits)
//     - [License](#license)

// ## Installation
// ${response.install}
//     Once pulled over from gitHub onto your local machine.
//     - First is to open up Microsoft Visual Studio Code.
    
//     - Then over on the side bar click ad folder to workspace
    
//     - Once you see on the files, to view in browser, right click index.html under workspace and then click Reveal in file explorer.
    
//     - Once the window comes up with the file. Just double click the file and the file will open up in the browser of your choice. 
// ## Screenshot
//     Here is a screenshot of the actual webpage.
//     <br>
// ## Credits
//     https://bootcamp.unh.edu/ 
    
//     https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
    
//     https://choosealicense.com/
    
//  ## Website
//     https://coreynance.github.io/Code_Refactor/
    
//  ## License
//     MIT License
    
//     Copyright (c) [2021] [Corey Nance]
    
//     Permission is hereby granted, free of charge, to any person obtaining a copy
//     of this software and associated documentation files (the "Software"), to deal
//     in the Software without restriction, including without limitation the rights
//     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//     copies of the Software, and to permit persons to whom the Software is
//     furnished to do so, subject to the following conditions:
    
//     The above copyright notice and this permission notice shall be included in all
//     copies or substantial portions of the Software.
    
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//     SOFTWARE.`,
//      'utf-8',
//      info =>
//      console.log('Success')
//      )
// });


// // - 
// // - 
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();



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
        type: 'input',
        message: 'What is Table of Contents?',
        name: 'table',
    },
    {
        type: 'input',
        message: 'What is the installation?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What is the usage',
        name: 'use',
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
    // console.log(response.title);

    if(response.title !== '') {
        methods.data.writeTitle(response.title);
    }
    if(response.description !== '') {
        methods.data.writeDescription(response.description);
    }

    // methods.data.writeLicense(response.license);
//     fs.writeFile('readMe.md', 
// `# ${response.title}
// ## Description
    
// ${response.description}
    
    
// ## Table of Contents (Optional)
// If your README is long, add a table of contents to make it easy for users to find what they need.
// ${response.table}
//     - [Installation](#installation)
//     - [Screenshot](#screenshot)
//     - [Website](#website)
//     - [Credits](#credits)
//     - [License](#license)

// ## Installation
// ${response.install}
//     Once pulled over from gitHub onto your local machine.
//     - First is to open up Microsoft Visual Studio Code.
    
//     - Then over on the side bar click ad folder to workspace
    
//     - Once you see on the files, to view in browser, right click index.html under workspace and then click Reveal in file explorer.
    
//     - Once the window comes up with the file. Just double click the file and the file will open up in the browser of your choice. 
// ## Screenshot
//     Here is a screenshot of the actual webpage.
//     <br>
// ## Credits
//     https://bootcamp.unh.edu/ 
    
//     https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
    
//     https://choosealicense.com/
    
//  ## Website
//     https://coreynance.github.io/Code_Refactor/
    
//  ## License
//     MIT License
    
//     Copyright (c) [2021] [Corey Nance]
    
//     Permission is hereby granted, free of charge, to any person obtaining a copy
//     of this software and associated documentation files (the "Software"), to deal
//     in the Software without restriction, including without limitation the rights
//     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//     copies of the Software, and to permit persons to whom the Software is
//     furnished to do so, subject to the following conditions:
    
//     The above copyright notice and this permission notice shall be included in all
//     copies or substantial portions of the Software.
    
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//     SOFTWARE.`,
//      'utf-8',
//      info =>
//      console.log('Success')
//      )
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
