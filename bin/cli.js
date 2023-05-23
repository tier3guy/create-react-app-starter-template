#!/usr/bin/env node

const { execSync } = require("child_process");

// Function that runs commands
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

const gh_repos = {
  master: "https://github.com/tier3guy/create-react-app-starter-template",
  tailwind:
    "https://github.com/tier3guy/create-react-app-starter-template/tree/tailwind",
  typscript:
    "https://github.com/tier3guy/create-react-app-starter-template/tree/typescript",
  "typscript-tailwind":
    "https://github.com/tier3guy/create-react-app-starter-template/tree/typescript-tailwind",
};

const repo_name = process.argv[2] ? process.argv[2] : "Frontend";
const flag = process.argv[3] ? process.argv[3] : "master";

const gitCloneCommand = `git clone --depth 1 ${gh_repos[flag]}  ${repo_name}`;
const npmInstallCommand = `cd ${repo_name} && npm install`;

console.log("\n>> Creating new application ...");
const clonned = runCommand(gitCloneCommand);
if (!clonned) process.exit(1);

console.log("\n\n>> Installing dependencies to the project ...");
const installed = runCommand(npmInstallCommand);
if (!installed) process.exit(1);

console.log("\n\n>> Congratulations, you project is ready !");
console.log(
  `\n>> run cd ${repo_name} to go to the project directory and npm run start to start the project`
);
