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
- [Tests](#-tests)
- [Credits](#-credits)
- [Contributing](#-contributing)
- [Questions](#-questions)
- [License](#-license)
`;
  const description = `
## 📖 DESCRIPTION  
### 🎯 What is it about?  
${data.description} 
### 🔍 Preview  
The following image shows the web application's appearance and functionality:
![Project image](https://picsum.photos/id/1/800/500)
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
