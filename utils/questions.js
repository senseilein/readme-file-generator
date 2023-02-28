import { isValidEmail } from "./functions.js";
import { isValidUserName } from "./functions.js";

const welcomeMsg = `
✨ Welcome to the README file generator!✨
The app that dynamically generates a professional README.md file for you whilst enabling you to devote more time to working on your project!

✨ Please read the instructions carefully✨
- After answering a question, press [Enter] to submit it
- If you don't yet know the answer to a (non-mandatory) question, you can skip it and we will generate some placeholder content instead.
(You can always update those sections after the file has been generated)
`;

const confirmInstructions = [
  {
    type: "confirm",
    message: "Please kindly confirm that you've read the instructions:",
    name: "hasRead",
  },
];

// array of questions for user
const questions = [
  {
    type: "input",
    message: "Title of the project:",
    name: "title",
  },
  {
    type: "input",
    message: "Description: (what is it about? what did you learn?) ",
    name: "description",
  },
  {
    type: "confirm",
    message: "Do you already have an image preview for this application?",
    name: "hasImagePreview",
  },
  {
    type: "input",
    message: "Path or URL of the image: ",
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
    message: "Can you provide a URL for the deployed application? ",
    name: "hasDeployedAppURL",
  },
  {
    type: "input",
    message: "Deployed application URL:",
    name: "deployedAppURL",
    when(answers) {
      return answers.hasDeployedAppURL;
    },
  },
  {
    type: "input",
    message: "A few words about the main functionalities of the app:",
    name: "mainFunctionalities",
    when(answers) {
      return !answers.DeployedAppURL;
    },
  },
  {
    type: "input",
    message: "Insert all the tech used separated by a comma: (e.g html5, c++)",
    name: "tech",
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
    message: "How to run the tests? ",
    name: "tests",
    when(answers) {
      return answers.hasTests;
    },
  },
  {
    type: "confirm",
    message:
      "Do you want to add a credits section to list the resources and people that helped you throughout the project?",
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
    message: "How can other developers contribute to the project? ",
    name: "contributing",
  },
  {
    type: "input",
    message: "Email address: ",
    name: "emailAddress",
    validate: isValidEmail,
  },
  {
    type: "input",
    message: "Github username: ",
    name: "userName",
    validate: isValidUserName,
  },
  {
    type: "confirm",
    message: "Do you use a license for this project?",
    name: "hasLicense",
  },
  {
    type: "list",
    message: "Please select the license: ",
    name: "licenseChoice",
    choices: ["MIT License", "Apache 2.0 License", "The Unlicense"],
    when(answers) {
      return answers.hasLicense;
    },
  },
];

export { welcomeMsg, confirmInstructions, questions };
