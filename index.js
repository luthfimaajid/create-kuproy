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
        choices: ['TypeORM', 'Native Mysql', 'Native ...']
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
        name: 'framework',
        message: 'Framework',
        choices: ['Vue', 'React', 'Angular']
      }])

      const answer2 = await inquirer.prompt([{
        type: 'list',
        name: 'css',
        message: 'CSS framework',
        choices: ['Bootstrap', 'Tailwind', 'Bulma']
      }])

      project = {
        ...project,
        ...answer,
        ...answer2
      }
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
  
  if(project.projectType == 'Fullstack') {
    switch (project.database) {
      case "TypeORM":
        runCommand(`cd ${projectName} && git clone --depth 1 https://github.com/luthfimaajid/create-kuproy -b be-typeorm backend`)
        break;
      default:
        break;
    }

    switch (project.framework) {
      case "Vue":
        runCommand(`cd ${projectName} && git clone --depth 1 https://github.com/luthfimaajid/create-kuproy -b fe-vue frontend`)
        break;
      default:
        break;
    }

  } else {
    switch (project.database) {
      case "TypeORM":
        runCommand(`git clone --depth 1 https://github.com/luthfimaajid/create-kuproy -b be-typeorm ${projectName}`)
        break;
      default:
        break;
    }

    switch (project.framework) {
      case "Vue":
        runCommand(`git clone --depth 1 https://github.com/luthfimaajid/create-kuproy -b fe-vue ${projectName}`)
        break;
      default:
        break;
    }
  }

	debug && log(flags);
})();
