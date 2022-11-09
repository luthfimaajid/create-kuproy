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

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

  const project = await prompt();

  console.log(project);

	debug && log(flags);
})();
