function renderLicenseBadge(license) {
  if (license !== 'None') {
    return ` ![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
  This project is licensed under the ${license} license`;
  }
  return '';
}

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
  For any inquiries, spam by inbox here: ${data.emailAddress}
  To peruse more of my portfolio, check this out: [${
    data.gitHubUserName
  }](https://github.com/${data.gitHubUserName})`;
}

module.exports = generateMarkdown;
