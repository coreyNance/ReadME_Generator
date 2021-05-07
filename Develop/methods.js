const { info } = require('console');
const fs = require('fs');
const license = require('./license');

console.log(license.boost);
var methods = {};

methods.writeTitle = function(newTitle) {

    let titleOutput = '';

    if(newTitle === '') {
        titleOutput = ''
    }
    else {
        titleOutput = `# ${newTitle}`;
    }

    return titleOutput;

}



methods.writeDescription = function(newDescription) {

  let descriptionOutput = '';

  if(newDescription === '') {
    descriptionOutput = '';
  }
  else {
    descriptionOutput = `## Description
${newDescription}`
  
  }
   return descriptionOutput;

}


methods.writeTable = function(newTable) {

  let tableOutput = '';
    
  if(newTable === '') {
    tableOutput = '';                 // need to figure out how to put table Idea is to feed each section in
}
else {
  tableOutput = `## Table of Contents
${newTable}`
}
  return tableOutput;
}


methods.writeInstall = function(newInstall) {

  installOutput = '';

  if(newInstall === '') {
    installOutput = '';
  }
  else {
    installOutput = 
    `## Installation
Once pulled over from gitHub onto your local machine.
- First is to open up Microsoft Visual Studio Code.
    
- Then over on the side bar click ad folder to workspace
    
- Once you see on the files, to view in browser, right click index.html under workspace and then click Reveal in file explorer.
    
- Once the window comes up with the file. Just double click the file and the file will open up in the browser of your choice. `
  }
  
  return installOutput;
    
}



methods.writeScreenShot = function(newScreenshot) {

  let screenshotOutput = '';

  if(newScreenshot === false) {
    screenshotOutput = '';
  }
  else {
    screenshotOutput = 
    
`## Screenshot
![Screenshot](Develop/assets/images/prairieOne.png)
<br>  `
  }

  return screenshotOutput;
    
}


methods.writeCredits = function(newCredits) {

  let creditOutput = '';

  if(newCredits === false) {
    creditOutput = '';
  }
  else {

  creditOutput = ` 
  ## Credits
  https://bootcamp.unh.edu/ 
  
  https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
  
  https://choosealicense.com/`
    
}

return creditOutput;

}

methods.writeWebsite = function(newSite) {

  let siteOutput = '';

  if (newSite === false) {
    siteOutput = '';
  }
  else {
    siteOutput = `## Website
https://coreynance.github.io/Test/Fakelink`
  }

  return siteOutput;
    
}

module.exports = methods.writeLicense = function(newLicense) {

    switch(newLicense) {
        case 'BOOST':
          licensePick = license.boost();
          break;
        case 'MIT':
          licensePick = license.mit();
          break;
        case 'UNLICENSE':
            licensePick = license.unlicense();
          break;
        default:
          console.log('something went wrong');
      }

      return licensePick;
}



module.exports.data = methods;

