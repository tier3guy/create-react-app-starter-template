#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.log(">> Failed to execute command : ", command);
    console.log(e);
    return false;
  }
  return true;
};

const repo_name = process.argv[2];

const gitCloneCommand = `git clone --depth 1 https://github.com/tier3guy/create-react-app-starter-template ${
  repo_name ? repo_name : ""
}`;
const npmInstallCommands = `cd ${
  repo_name ? repo_name : "create-react-app-starter-template"
} && npm install`;
// const removingGit = `git remote rm origin`;

console.log("\n>> Creating new application ...");
const clonned = runCommand(gitCloneCommand);
if (!clonned) process.exit(1);

console.log("\n\n>> Installing dependencies to the project ...");
const installed = runCommand(npmInstallCommands);
if (!installed) process.exit(1);

// const removed = runCommand(removingGit);
// if (!removed) process.exit(1);

console.log("\n\n>> Congratulations, you project is ready !");
console.log(
  `>> run cd ${
    repo_name ? repo_name : "create-react-app-starter-template"
  } to go to the project directory and npm run start to start the project`
);
