function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case "GPL":
      return "![License: GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
    case "Apache 2.0":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      break;
    default:
      return "No License selected";
      break;
  }
}

function renderLicenseLink(license) {
  return"";
}

function renderLicenseSection(license) {
  var badge = renderLicenseBadge(license);
  var link = renderLicenseLink(license);
  return `${badge} ${link}`;
}

function generateMarkdown(answer) {
  return `
  ${renderLicenseSection(answer.license)}
  # Title
  ${answer.Title}
  ## Description
  ${answer.Description}
  ## Table of Contents
  * [User Story](#User)
  * [Installation](#Installation)
  * [Test](#Testing)
  * [Contributors](#contributors)
  * [License](#license)
  * 
  ## User Story
  ${answer.User}
  ## Installation
  ${answer.Installation}
  ## Test
  ${answer.Testing}
  ## Contributors
  ${answer.Contributors}
  ## License
  ${answer.License}

  `;
}

module.exports = generateMarkdown;