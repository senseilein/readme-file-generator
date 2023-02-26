import * as fs from "fs";

// function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (error) => {
    error
      ? console.error(error)
      : console.info(`Well done, your README file is ready! Happy Coding!`);
  });
};

// function to validate email address
// regex found at https://www.w3schools.blog/email-validation-javascript-js
const isValidEmail = (email) => {
  const mailformat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  return email.match(mailformat) ? true : "Invalid email address!";
};

const isValidUserName = (userName) => {
  // criteria to consider when validating userName (as per Github username requirements):
  // can only contain alphanumeric characters and dashes
  // Usernames must not exceed 39 characters
  // const nonAlphanumericChar = `( )\`~!@#$%^&*-+=|\\{}[]:;"'<>,.?/_`;

  // regex excludes nonAlphanumChar except dashes
  const authorizedChar = /^[a-zA-Z0-9-]*$/gi;

  const trimmedUserName = userName.trim();

  const validUserName =
    trimmedUserName.match(authorizedChar) &&
    trimmedUserName.length > 0 &&
    trimmedUserName.length <= 39;

  return validUserName ? true : "Invalid user name!";
};

export { writeToFile };
export { isValidEmail };
export { isValidUserName };
