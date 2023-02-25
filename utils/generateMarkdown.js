// function to generate markdown for README
function generateMarkdown(data) {
  /*---------- TITLE SECTION ----------*/
  const title = data.title
    ? `# ${data.title.toUpperCase()}`
    : `# TITLE NOT PROVIDED`;

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
  const descriptionPlaceholder = `
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  - Blandit aliquam etiam erat velit scelerisque in. Placerat vestibulum lectus mauris ultrices eros in. 
  - Cursus metus aliquam eleifend mi in nulla. Sagittis orci a scelerisque purus semper eget duis at tellus.
  `;

  const whatIsItAbout = data.description || descriptionPlaceholder;

  const imageURL = data.imageURL
    ? data.imageURL
    : "https://picsum.photos/id/1/800/500";

  const description = `
## 📖 DESCRIPTION  
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

  const userStoryPlaceholder = `\`\`\`
  As a user,
  I WANT to lorem ipsum dolor sit amet,
  SO THAT I can cursus metus aliquam eleifend mi in nulla.
  \`\`\``;
  const userStory = data.userStory
    ? `\`\`\`${data.userStory}\`\`\``
    : userStoryPlaceholder;

  const usage = `
## 💻 USAGE
[You can visit the webpage here](${deployedAppURL})
### 💬 User story
${userStory}
`;

  /*---------- TECHNOLOGY USED SECTION ----------*/
  // const technologyUsed = `x`;

  /*---------- INSTALLATION SECTION ----------*/
  const installationRequirements =
    data.installation || `No installation required`;
  const installation = `
  ## 🚀 INSTALLATION
  ${installationRequirements}
  `;
  /*---------- TESTS SECTION ----------*/
  // const tests

  /*---------- CREDITS SECTION ----------*/
  // const credits = `x`;

  /*---------- CONTRIBUTING SECTION ----------*/
  // const contributing = `x`;

  /*---------- QUESTIONS SECTION ----------*/
  // const questions = `x`;

  /*---------- LICENSE SECTION ----------*/
  // const licence

  const readMeFileContent = `
${title}
${tableOfContent}
${description}
${usage}
${installation}
`;

  return readMeFileContent;
}

export { generateMarkdown };

// {
//   type: "confirm",
//   message: "Are you OK?",
//   name: "ok",
// },
// {
//   type: "input",
//   message: "Why are you not OK?",
//   name: "healthReason",
//   when(answers) {
//     return !answers.ok;
//   },
// },
