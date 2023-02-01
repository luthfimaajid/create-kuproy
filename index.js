#!/usr/bin/env node

/**
 * create-kuproy
 * Tools for generating fullstack starter project
 *
 * @author - <->
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const {execSync} = require('child_process')
const inquirer = require('inquirer');
const ui = new inquirer.ui.BottomBar();

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;


let deleteCommand;
if (process.platform === "win32") {
  deleteCommand = "rmdir";
} else {
  deleteCommand = "rm -rf"
}

const prompt = async() => {
  let project;

  try {
    const answer = await inquirer.prompt([{
      type: 'list',
      name: 'projectType',
      message: 'Project type',
      choices: ['Fullstack', 'Backend', 'Frontend']
    }])

    project = {
      ...answer
    }

    if (project.projectType != 'Frontend') {
      ui.log.write('\nConfigure backend');
      const answer = await inquirer.prompt([{
        type: 'list',
        name: 'database',
        message: 'Database',
        choices: ['MongoDB (Mongoose)', 'PostgreSQL (Prisma)']
      }])

      project = {
        ...project,
        ...answer
      }
    }

    if (project.projectType != 'Backend') {
      ui.log.write('\nConfigure frontend');

      const answer = await inquirer.prompt([{
        type: 'list',
        name: 'css',
        message: 'CSS framework',
        choices: ['Bootstrap', 'Tailwind']
      }])

      project = {
        ...project,
        ...answer,
      }
    }

    ui.log.write('\nExample project');
    const answerSample = await inquirer.prompt([{
      type: 'list',
      name: 'sample',
      message: 'Do you want to generate example project?',
      choices: ['yes', 'no']
    }])
    project = {
      ...project,
      ...answerSample,
    }

  } catch (err) {
    console.error(err);
  }

  return project;
}

const runCommand = command => {
  try {
    execSync(`${command}`, {stdio: 'inherit'});
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false
  }

  return true;
}

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

  let projectName;

  if (input.length < 1) {
    const answer = await inquirer.prompt([{
      type: "input",
      name: "projectName",
      message: "Project name",
      default: "my-project",
    }])

    projectName = answer.projectName
  } else {
    projectName = input[0]
  }

  runCommand(`mkdir ${projectName}`)

  const project = await prompt();
  
  console.log(`\nCreating Project in /${projectName}.. \n`)

  if(project.projectType == 'Fullstack') {
    switch (project.database) {
      case "MongoDB (Mongoose)":
        runCommand(`git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b mevn-stack ${projectName}`)
        break;
      case "PostgreSQL (Prisma)":
        if(project.sample === 'yes') {
          runCommand(`cd ${projectName} && git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b be-postgres backend`)
        } else {
          runCommand(`cd ${projectName} && git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b be-postgres-blank backend`)
        }
        break;
      default:
        break;
    }

    runCommand(`${deleteCommand} ./${projectName}/backend/.git`)

    switch (project.css) {
      case "Bootstrap":
        if(project.database === "MongoDB (Mongoose)") {
          break;
        }

        if(project.sample === 'yes') {
          runCommand(`cd ${projectName} && git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b vue-bootstrap frontend`)
        } else {
          runCommand(`cd ${projectName} && git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b vue-bootstrap-blank frontend`)
        }
        break;
      default:
        break;
    }

    runCommand(`${deleteCommand} ./${projectName}/frontend/.git`)
    runCommand(`${deleteCommand} ./${projectName}/.git`)
    console.log(`Done. Now run:`);
    console.log(`\n\n cd ${projectName}/frontend\n npm install`)
    console.log(`\n\n cd ${projectName}/backend\n npm install`)
  } else {
    switch (project.database) {
      case "MongoDB (Mongoose)":
        if(project.sample === 'yes') {
          runCommand(`git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b be-mongodb ${projectName}`)
        } else {
          runCommand(`git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b be-mongodb-blank ${projectName}`)
        }
        break;
      case "PostgreSQL (Prisma)":
        if(project.sample === 'yes') {
          runCommand(`git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b be-postgres ${projectName}`)
        } else {
          runCommand(`git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b be-postgres-blank ${projectName}`)
        }
        break;
      default:
        break;
    }

    switch (project.css) {
      case "Bootstrap":
        if(project.sample === 'yes') {
          runCommand(`git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b vue-bootstrap ${projectName}`)
        } else {
          runCommand(`git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b vue-bootstrap-blank ${projectName}`)
        }
        break;
      default:
        break;
    }

    runCommand(`${deleteCommand} ./${projectName}/.git`)
    console.log(`Done. Now run: \n\n cd ${projectName}\n npm install`)
  }

	debug && log(flags);
})();
