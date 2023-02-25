// const fs = require("fs");
// const path = require("path");
// const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

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
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    error ? console.error(error) : console.log(`Success!`);
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    const readMeFileContent = generateMarkdown(response);
    console.log(readMeFileContent);

    writeToFile("generatedREADME.md", readMeFileContent);
  });
}

// function call to initialize program
init();
