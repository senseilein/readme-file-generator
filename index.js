/*
TODO (suggestions for improvement) - Create additional array of questions for sections with multistep answers
* installation guidelines
* contribution guidelines
* credits section
  */

import * as fs from "fs";
import inquirer from "inquirer";
import path from "path";
import { generateMarkdown } from "./utils/generateMarkdown.js";

// const test = {
//   title: "this is the title",
// };
// console.log(generateMarkdown(test));

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please kindly describe your project: ",
    name: "description",
  },
  {
    type: "confirm",
    message: "Do you already have an image preview for this web application?",
    name: "hasImagePreview",
  },
  {
    type: "input",
    message: "Please kindly provide the path or URL for the image: ",
    name: "imageURL",
    when(answers) {
      return answers.hasImagePreview;
    },
  },
  {
    type: "input",
    message: "User story:",
    name: "userStory",
  },
  {
    type: "confirm",
    message: "Are there any installation requirements for this application?",
    name: "hasInstallationRequirements",
  },
  {
    type: "input",
    message: "Installation requirements: ",
    name: "installation",
    when(answers) {
      return answers.hasInstallationRequirements;
    },
  },
  {
    type: "confirm",
    message: "Do you provide tests for this application?",
    name: "hasTests",
  },
  {
    type: "input",
    message: "How to run tests? ",
    name: "tests",
    when(answers) {
      return answers.hasTests;
    },
  },
  {
    type: "confirm",
    message:
      "Do you want to add a credits section to list the resources or people that helped you throughout the project?",
    name: "hasCredits",
  },
  {
    type: "input",
    message: "Credits: ",
    name: "credits",
    when(answers) {
      return answers.hasCredits;
    },
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    error ? console.error(error) : console.log(`Success!`);
  });
}

// function to initialize program
function init() {
  console.log(`
  ✨ Welcome to the README file generator!✨
  The app that dynamically generates a professional README.md file for you 
  whilst enabling you to devote more time to working on your project!
  
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
