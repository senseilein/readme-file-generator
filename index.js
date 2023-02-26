/*
TODO (suggestions for improvement) 
- Create additional array of questions for sections with multistep answers
* installation guidelines
* contribution guidelines
* credits section
- Add defense on userProfile validation

  */

import inquirer from "inquirer";
import path from "path";
import { generateMarkdown } from "./utils/generateMarkdown.js";
import { questions } from "./utils/questions.js";
import { writeToFile } from "./utils/functions.js";

// function to initialize program
function init() {
  console.log(`
  ✨ Welcome to the README file generator!✨
  The app that dynamically generates a professional README.md file for you whilst enabling you to devote more time to working on your project!
  
  ✨ Please read the instructions carefully✨
  - After answering a question, press [Enter] to submit it
  - If you don't yet know the answer to a (non-mandatory) question, you can skip it and we will generate some placeholder content instead.
  `);

  inquirer.prompt(questions).then((response) => {
    console.log(response);
    const readMeFileContent = generateMarkdown(response);
    console.log(readMeFileContent);

    writeToFile("generatedREADME.md", readMeFileContent);
  });
}

// function call to initialize program
init();
