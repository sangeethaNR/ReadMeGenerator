// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("1st line renderLicenseBadge" + license);
if(license){
  console.log("inside renderbadge" + license)
  return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`
// switch(license){
//   case 'MIT' :
//    return '![badge](https://img.shields.io/badge/license-${responseObj.license}-brightgreen)
//              break;
//    case 'GNU' :
//      break;
//      case 'Apache 2.0' :
//         break;          
// } 
}
else 
return '';

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license)
   return `(https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log("renderLicenseSection" + license);
 const badge = renderLicenseBadge(license)
 const link = renderLicenseLink(license);
 console.log("badge" + badge);
 console.log("link" + link );
 const badge_link = badge.concat(link);
 console.log("badge_link" +badge_link);
 return badge_link;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("INSIDE generateMarkdown " + data);
//   console.log("@@@@@@@@@@@"+data);
  const licenseBadge = renderLicenseSection(data)

//   return `# ${data.title}

// `;
console.log("return the license" + licenseBadge)
return licenseBadge;
}

module.exports = generateMarkdown;
