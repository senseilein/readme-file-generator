import inquirer from "inquirer";
import { generateMarkdown } from "./utils/generateMarkdown.js";
import {
  welcomeMsg,
  confirmInstructions,
  questions,
} from "./utils/questions.js";
import { writeToFile } from "./utils/functions.js";

// function to initialize program
const init = async () => {
  console.info(welcomeMsg);

  let hasReadInstruction = await inquirer.prompt(confirmInstructions);

  while (!hasReadInstruction.hasRead) {
    hasReadInstruction = await inquirer.prompt(confirmInstructions);
  }

  inquirer.prompt(questions).then((data) => {
    console.log(data);
    const readMeFileContent = generateMarkdown(data);

    writeToFile("generatedREADME.md", readMeFileContent);
  });
};

init();
