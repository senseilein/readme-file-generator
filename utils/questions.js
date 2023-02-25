import { isValidEmail } from "./functions.js";
import { isValidUserName } from "./functions.js";

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
  {
    type: "input",
    message: "How can other developer contribute to the project? ",
    name: "contributing",
  },
  {
    type: "input",
    message: " Please enter your email address: ",
    name: "emailAddress",
    validate: isValidEmail,
  },
  {
    type: "input",
    message: "Please enter your Github username: ",
    name: "userName",
    validate: isValidUserName,
  },
];

export { questions };
