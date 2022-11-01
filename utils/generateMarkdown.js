// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return ` ![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)`;
  }
    return '';

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
  This project is licensed under the ${license} license`;
  }
    return '';

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation Instructions](#installation-instructions)
  * [Usage Information](#usage-information)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test Instructions](#test-instructions)
  ${renderLicenseLink(data.license)}
  * [Questions](#questions)
  ## Installation Instructions
  ${data.installationInstructions}
  ## Usage Information
  ${data.usageInformation}
  ## Contribution Guidelines
  ${data.contributionGuidelines}
  ## Test Instructions
  ${data.testInstructions}
  ${renderLicenseSection(data.license)}
  ## Questions
  If you have any questions, you can reach me at ${data.emailAddress}
  You can find more of my work at [${data.gitHubUserName}](https://github.com/${data.gitHubUserName})`;
}

module.exports = generateMarkdown;
