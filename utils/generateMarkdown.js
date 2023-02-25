// function to generate markdown for README
function generateMarkdown(data) {
  // console.log("Work");
  // return `# ${data.title}

  // `;

  const title = `# ${data.title.toUpperCase()}`;
  const tableOfContent = `
## 🚩 TABLE OF CONTENT

- [Description](#-description)
- [Usage](#-usage)
- [Technology used](#-technology-used)
- [Installation](#-installation)
- [Credits](#-credits)
`;
  const description = `
## 📖 DESCRIPTION

### 🎯 What is it about?
${data.description}
`;

  // const usage = `x`;
  // const technologyUsed = `x`;
  // const installation = `x`;
  // const credits = `x`;
  // const licence = `x`;

  const readMeFileContent = `
${title}
${tableOfContent}
${description}

`;

  return readMeFileContent;
}

// module.exports = generateMarkdown;

export { generateMarkdown };
