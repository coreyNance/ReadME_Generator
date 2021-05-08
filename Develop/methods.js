const fs = require('fs');
const license = require('./license');

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

  let installCheck = '';
  let screenShotCheck = '';
  let websiteCheck = '';
  let creditsCheck = '';
  let licenseCheck = '';
  let fullCheckList = '';

    
  if(newTable === '') {
    fullCheckList = '';             
}
else {
  if (newTable.includes('Installation')) {
    installCheck = `- [Installation](#installation)`;
  }
  else {
    installCheck = '';
  }


  if (newTable.includes('Screenshot')) {
    screenShotCheck = `- [Screenshot](#screenshot)`;
  }
  else {
    screenShotCheck = '';
  }


  if (newTable.includes('Website')) {
    websiteCheck = `- [Website](#website)`;
  }
  else {
    websiteCheck = '';
  }

  if (newTable.includes('Credits')) {
    creditsCheck = `- [Credits](#credits)`;
  }
  else {
    creditsCheck = '';
  }

  if (newTable.includes('License')) {
    licenseCheck = `- [License](#license)`;
  }
  else {
    licenseCheck = '';
  }

  fullCheckList = `## Table

${installCheck}
${screenShotCheck}
${websiteCheck}
${creditsCheck}
${licenseCheck}`

}
  return fullCheckList;
}


methods.writeInstall = function(newInstall) {

  installOutput = '';

  if(newInstall === false) {
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
![Screenshot](./assets/images/prairieOne.png)
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
  https://github.com/coreyNance/ReadME_Generator`
  }

  return siteOutput;
    
}

methods.writeLicense = function(newLicense, newName, newYear) {

    switch(newLicense) {
        case 'BOOST':
          licensePick = license.boost(newName, newYear);
          break;
        case 'MIT':
          licensePick = license.mit(newName, newYear);
          break;
        case 'UNLICENSE':
            licensePick = license.unlicense(newName, newYear);
          break;
        default:
          console.log('something went wrong');
      }

      return licensePick;
}



module.exports.data = methods;

