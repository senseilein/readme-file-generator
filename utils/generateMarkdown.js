// function to generate markdown for README
function generateMarkdown(data) {
  // console.log("Work");
  // return `# ${data.title}

  // `;

  const tableOfContent = `
## TABLE OF CONTENT

- [Description](#-description)
- [Usage](#-usage)
- [Technology used](#-technology-used)
- [Installation](#-installation)
- [Credits](#-credits)
`;

  const readMeFileContent = `
# ${data.title.toUpperCase()}
${tableOfContent}
`;

  return readMeFileContent;
}

// module.exports = generateMarkdown;

export { generateMarkdown };
