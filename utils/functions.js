import * as fs from "fs";

// function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (error) => {
    error ? console.error(error) : console.log(`Success!`);
  });
};

// function to validate email address
const isEmailValid = (email) => {
  const mailformat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  return email.match(mailformat) ? true : "Invalid email address!";
  // if(email.match(mailformat)){
  //     return true
  // }
  // //"Invalid email address."
  // return false;
};

export { writeToFile };
export { isEmailValid };
