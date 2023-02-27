// helper functions for the generateMarkdown() function
const generateTitle = (dataTitle) => {
  return dataTitle
    ? `# ${dataTitle.toUpperCase()}`
    : `# LOREM IPSUM DOLOR SIT AMET`;
};

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

const createTableOfContent = () => {
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
  return tableOfContent;
};

const generateImageURL = (dataImageURL) => {
  return dataImageURL ? dataImageURL : "https://picsum.photos/id/1/800/500";
};

const generateDescriptionSection = (dataDescription, imageURL) => {
  const placeholderText = `
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  - Blandit aliquam etiam erat velit scelerisque in. Placerat vestibulum lectus mauris ultrices eros in. 
  - Cursus metus aliquam eleifend mi in nulla. Sagittis orci a scelerisque purus semper eget duis at tellus.
  `;

  const whatIsItAbout = dataDescription || placeholderText;

  const description = `## 📖 DESCRIPTION  
### 🎯 What is it about?  

${whatIsItAbout}  

### 🔍 Preview  
The following image shows the web application's appearance and functionality:  

![Project image](${imageURL})
`;
  return description;
};

const generateUserStory = (dataUserStory) => {
  const userStoryPlaceholder = `
  \`\`\`
  As a user,
  I WANT to lorem ipsum dolor sit amet,
  SO THAT I can cursus metus aliquam eleifend mi in nulla.
  \`\`\``;
  return dataUserStory ? `\`\`\`${dataUserStory}\`\`\`` : userStoryPlaceholder;
};
const generateUsageSection = (deployedAppURL, userStory) => {
  const usage = `## 💻 USAGE
  [You can visit the webpage here](${deployedAppURL})

### 💬 User story
${userStory}
`;
  return usage;
};

const generateInstallationSection = (dataInstallation) => {
  const installationRequirements =
    dataInstallation || `No installation required`;
  const installation = `## 🚀 INSTALLATION
${installationRequirements}
`;
  return installation;
};

const generateTestSection = (dataTests) => {
  const testRequirements = dataTests || `No tests available at the moment.`;
  const tests = `## ✅ TESTS
  ${testRequirements}
  `;
  return tests;
};

const generateCreditSection = (dataCredits, dataHasCredits) => {
  const placeholderText = `
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  - Blandit aliquam etiam erat velit scelerisque in. Placerat vestibulum lectus mauris ultrices eros in. 
  - Cursus metus aliquam eleifend mi in nulla. Sagittis orci a scelerisque purus semper eget duis at tellus.
  `;

  let creditText = "";

  if (dataHasCredits) {
    if (dataCredits) {
      creditText = "\n## 💬 CREDITS\n" + dataCredits;
    } else {
      creditText = "\n## 💬 CREDITS\n" + placeholderText;
    }
  }
  return creditText;
};

const generateContributingSection = (dataContributing) => {
  const contributionGuidelines =
    dataContributing ||
    `All contributions are welcome. Contribution guidelines will be available soon.`;
  const contributing = `## ✨ CONTRIBUTING
  ${contributionGuidelines}
  `;
  return contributing;
};

const generateQuestionSection = (dataUserName, dataEmailAddress) => {
  const userName = dataUserName
    ? `[@${dataUserName.trim()}.](https://github.com/${dataUserName.trim()})`
    : ".";

  const questions = `## ❔ QUESTIONS
  - If you have any questions, [please click here to send me an email.](mailto:${dataEmailAddress}) 
  - You can also visit my Github profile ${userName}
  `;

  return questions;
};

const generateLicenseSection = (dataLicenseChoice) => {
  return dataLicenseChoice
    ? `## 📃 LICENSE
    This application is covered under ${dataLicenseChoice}.`
    : `## 📃 LICENSE
    This application doesn't have any license for the moment.`;
};

//---Tech used--//
const generateTechUsed = (dataTech) => {
  const tech = dataTech.split(",");
  return tech;
};

/*
for logo
(do step 2-5 first)
Name => Name.toLowerCase()
1. strip whitespaces
2. remove all non-alphanumChar except + , # and .
3. if + found >> replace + with plus
4. if # found >> replace # with sharp
5. if . found 
      a. if only 1 occurrence >> replace with dot
      b. if 2 occurrences >> delete them 

Examples (found on https://github.com/simple-icons/simple-icons/blob/develop/slugs.md):

Nintendo 3DS => nintendo3ds
O'Reilly => oreilly
Node.js => nodedotjs
del.icio.us => delicious
semantic-release => semanticrelease
/e/ => e
Kahoot! => kahoot
C++ => cplusplus (same for notepad++)
C Sharp => csharp
*/
const generateBadgeLogoLabel = (techLabel) => {
  let label = techLabel.replace(/\+/g, "plus");

  label = label.replace(/\#/g, "sharp");

  let hasDots = label.match(/\./g);

  if (hasDots && hasDots.length > 1) {
    console.log(hasDots);
    label = label.replace(/(?:\.)+/g, "");
  }
  label = label.replace(/\./g, "dot");

  label = label.replace(/[^a-z0-9]/gi, "");

  return label.toLowerCase();
};

const generateBadgeURL = (logo, techLabel) => {
  console.log(`https://img.shields.io/badge/${techLabel}-black?logo=${logo}`);
};

//generateBadgeURL(generateBadgeLogoLabel("C++"), "C++");

/* ----------------------------------------------------------------------- */

// function to generate markdown for README
const generateMarkdown = (data) => {
  /*---------- TITLE SECTION ----------*/
  const title = generateTitle(data.title);

  /*---------- TABLE OF CONTENT ----------*/
  const tableOfContent = createTableOfContent();

  /*---------- DESCRIPTION SECTION ----------*/

  const imageURL = generateImageURL(data.imageURL);

  const description = generateDescriptionSection(data.description, imageURL);

  /*---------- USAGE SECTION ----------*/
  const deployedAppURL =
    data.deployedAppURL ||
    `https://en.wikipedia.org/wiki/HTTP_404#Soft_404_errors`;

  const userStory = generateUserStory(data.userStory);

  const usage = generateUsageSection(deployedAppURL, userStory);

  /*---------- TECHNOLOGY USED SECTION ----------*/
  // const technologyUsed = `x`;

  /*---------- INSTALLATION SECTION ----------*/

  const installation = generateInstallationSection(data.installation);

  /*---------- TESTS SECTION ----------*/

  const tests = generateTestSection(data.tests);

  /*---------- CREDITS SECTION ----------*/

  const credits = generateCreditSection(data.credits, data.hasCredits);

  /*---------- CONTRIBUTING SECTION ----------*/

  const contributing = generateContributingSection(data.contributing);

  /*---------- QUESTIONS SECTION ----------*/

  const questions = generateQuestionSection(data.userName, data.emailAddress);

  /*---------- LICENSE SECTION ----------*/

  // Please note that badges will be generated at the top of the README file
  const licenceBadge = generateLicenseBadge(
    data.hasLicense,
    data.licenseChoice
  );

  const license = generateLicenseSection(data.licenseChoice);

  /*---------- GENERATE README CONTENT ----------*/
  const readMeFileContent = `
${title}
${licenceBadge}
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
};

export { generateMarkdown };
