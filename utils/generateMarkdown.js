// function to generate markdown for README
function generateMarkdown(data) {
  /*---------- TITLE SECTION ----------*/
  const title = data.title
    ? `# ${data.title.toUpperCase()}`
    : `# LOREM IPSUM DOLOR SIT AMET`;

  /*---------- TABLE OF CONTENT ----------*/
  const tableOfContent = `
  ## 🚩 TABLE OF CONTENT
- [Description](#-description)
- [Usage](#-usage)
- [Technology used](#-technology-used)
- [Installation](#-installation)
- [Tests](#-tests)
- [Credits](#-credits)
- [Contributing](#-contributing)
- [Questions](#-questions)
- [License](#-license)
`;

  /*---------- DESCRIPTION SECTION ----------*/
  const placeholderText = `
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  - Blandit aliquam etiam erat velit scelerisque in. Placerat vestibulum lectus mauris ultrices eros in. 
  - Cursus metus aliquam eleifend mi in nulla. Sagittis orci a scelerisque purus semper eget duis at tellus.
  `;

  const whatIsItAbout = data.description || placeholderText;

  const imageURL = data.imageURL
    ? data.imageURL
    : "https://picsum.photos/id/1/800/500";

  const description = `## 📖 DESCRIPTION  
### 🎯 What is it about?  
${whatIsItAbout} 
### 🔍 Preview  
The following image shows the web application's appearance and functionality:\n
![Project image](${imageURL})
`;

  /*---------- USAGE SECTION ----------*/
  const deployedAppURL =
    data.deployedAppURL ||
    `https://en.wikipedia.org/wiki/HTTP_404#Soft_404_errors`;

  const userStoryPlaceholder = `
  \`\`\`
  As a user,
  I WANT to lorem ipsum dolor sit amet,
  SO THAT I can cursus metus aliquam eleifend mi in nulla.
  \`\`\``;
  const userStory = data.userStory
    ? `\`\`\`${data.userStory}\`\`\``
    : userStoryPlaceholder;

  const usage = `## 💻 USAGE
[You can visit the webpage here](${deployedAppURL})
### 💬 User story
${userStory}
`;

  /*---------- TECHNOLOGY USED SECTION ----------*/
  // const technologyUsed = `x`;

  /*---------- INSTALLATION SECTION ----------*/
  const installationRequirements =
    data.installation || `No installation required`;
  const installation = `## 🚀 INSTALLATION
  ${installationRequirements}
  `;
  /*---------- TESTS SECTION ----------*/
  const testRequirements = data.tests || `No tests available at the moment.`;
  const tests = `## ✅ TESTS
  ${testRequirements}
  `;

  /*---------- CREDITS SECTION ----------*/

  let dataCredits = [data.credits, data.hasCredits];

  const generateCreditSection = (dataCredits) => {
    const [credits, hasCredits] = dataCredits;
    let creditText = "";

    if (hasCredits) {
      if (credits) {
        creditText = "\n## 💬 CREDITS\n" + credits;
      } else {
        creditText = "\n## 💬 CREDITS\n" + placeholderText;
      }
    }
    return creditText;
  };

  const credits = generateCreditSection(dataCredits);

  /*---------- CONTRIBUTING SECTIO N ----------*/
  const contributionGuidelines =
    data.contributing ||
    `All contributions are welcome. Contribution guidelines will be available soon.`;
  const contributing = `## ✨ CONTRIBUTING
  ${contributionGuidelines}
  `;

  /*---------- QUESTIONS SECTION ----------*/
  const userName = data.userName
    ? `[@${data.userName.trim()}.](https://github.com/${data.userName.trim()})`
    : ".";
  const questions = `# ❔ QUESTIONS
  - If you have any questions, [please click here to send me an email.](mailto:${data.emailAddress}) 
  - You can also visit my Github profile ${userName}
  `;

  /*---------- LICENSE SECTION ----------*/

  const hasLicense = data.hasLicense;
  const licenseChoice = data.licenseChoice;
  const generateLicenseBadge = (hasLicense, licenseChoice) => {
    if (!hasLicense) {
      return;
    }

    const licenseCollection = [
      {
        name: "MIT License",
        badge:
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      },
      {
        name: "Apache 2.0 License",
        badge:
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      },
      {
        name: "The Unlicense",
        badge:
          "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
      },
    ];

    for (const license of licenseCollection) {
      if (license.name === licenseChoice) {
        return license.badge;
      }
    }
  };

  const license = `## 📃 LICENSE
  This application is covered under ${licenseChoice}.
  `;

  /*---------- GENERATE README CONTENT ----------*/
  const readMeFileContent = `
${title}
${generateLicenseBadge(hasLicense, licenseChoice)}
${tableOfContent}
${description}
${usage}
${installation}
${tests}
${credits}
${contributing}
${questions}
${license}
`;

  return readMeFileContent;
}

export { generateMarkdown };
