const fs = require('fs');
const license = require('./license');
var methods = {};

methods.writeTitle = function(newTitle) {

    // console.log('function worked');
    fs.writeFile('readMe.md', 
    `# ${newTitle}
    ## Description`,
    'utf-8',
    info =>
     console.log('Success')
     )

}

methods.writeDescription = function(newDescription) {

    fs.writeFile('readMe.md', 
    `# Title
    ## Description
    ${newDescription}`,
    'utf-8',
    info =>
     console.log('Success')
     )

}


methods.writeTable = function() {
    
}


methods.writeInstall = function() {
    
}

methods.writeScreenShot = function() {
    
}


methods.writeCredits = function() {
    
}


methods.writeWebsite = function() {
    
}

methods.writeLicense = function() {

//     switch(response) {
//         case x:
//           // code block
//           break;
//         case y:
//           // code block
//           break;
//         default:
//           // code block
//       }
}


module.exports.data = methods;



// switch(response) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }