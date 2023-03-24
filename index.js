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
const fs = require('fs');
const process = require('process');

const ui = new inquirer.ui.BottomBar();

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

const runCommand = command => {
  try {
    execSync(`${command}`, {stdio: 'inherit'});
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false
  }

  return true;
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
      const backend = await inquirer.prompt([
        {
          type: 'list',
          name: 'backend',
          message: 'Backend Framework',
          choices: ['Express', 'Fastify']
        },
      ])

      let database;
      if (backend.backend === "Express") {
        database = await inquirer.prompt([
          {
            type: 'list',
            name: 'database',
            message: 'Database Engine',
            choices: ['MongoDB (Mongoose)', 'PostgreSQL (Prisma)', 'MySQL (Prisma)']
          }
        ])
      }

      if (backend.backend === "NestJS (Express)") {
        database = await inquirer.prompt([
          {
            type: 'list',
            name: 'database',
            message: 'Database Engine',
            choices: ['MongoDB (Mongoose)', 'PostgreSQL (Prisma)', 'MySQL (Prisma)']
          }
        ])
      }

      if (backend.backend === "Fastify") {
        database = await inquirer.prompt([
          {
            type: 'list',
            name: 'database',
            message: 'Database Engine',
            choices: ['MongoDB (Mongoose)', 'PostgreSQL (Prisma)', 'MySQL (Prisma)' ]
          }
        ])
      }


      project = {
        ...project,
        ...backend,
        ...database
      }
    }

    if (project.projectType != 'Backend') {
      ui.log.write('\nConfigure frontend');

      const frontend = await inquirer.prompt([
        {
          type: 'list',
          name: 'frontend',
          message: 'Frontend framework',
          choices: ['Vue', 'React']
        }
      ])

      let css;
      if (frontend.frontend === "Vue") {
        css = await inquirer.prompt([
          {
            type: 'list',
            name: 'css',
            message: 'CSS/UI framework',
            choices: ['Bootstrap', 'Tailwind']
          }
        ])
      }

      if (frontend.frontend === "React") {
        css = await inquirer.prompt([
          {
            type: 'list',
            name: 'css',
            message: 'CSS/UI framework',
            choices: ['Tailwind']
          }
        ])
      }

      project = {
        ...project,
        ...frontend,
        ...css
      }
    }

    if(project.projectType === 'Fullstack') {
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
    } else {
      project = {
        ...project,
        sample: "no"
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

  const isFullstack = project.projectType === 'Fullstack';

  // const isExample = project.answerSample === 'yes';

  if(project.projectType !== 'Frontend') {
    switch (project.backend) {
      case "Express":
        switch (project.database) {
          case "MongoDB (Mongoose)":
            if(project.sample === 'yes') {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b express-mongodb ${isFullstack ? "backend" : projectName}`)
            } else {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b express-mongodb-blank ${isFullstack ? "backend" : projectName}`)
            }
            break;

          case "PostgreSQL (Prisma)":
            if(project.sample === 'yes') {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b express-postgres ${isFullstack ? "backend" : projectName}`)
            } else {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b express-postgres-blank ${isFullstack ? "backend" : projectName}`)
            }
            break;

          case "MySQL (Prisma)":
            if(project.sample === 'yes') {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b express-mysql ${isFullstack ? "backend" : projectName}`)
            } else {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b express-mysql-blank ${isFullstack ? "backend" : projectName}`)
            }
            break;

          default:
            break;
        }
        break;

      case "NestJS (Express)":
        switch (project.database) {
          case "MongoDB (Mongoose)":
            if(project.sample === 'yes') {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b nestjs-mongodb ${isFullstack ? "backend" : projectName}`)
            } else {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b nestjs-mongodb-blank ${isFullstack ? "backend" : projectName}`)
            }
            break;

          case "PostgreSQL (Prisma)":
            if(project.sample === 'yes') {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b nestjs-postgres ${isFullstack ? "backend" : projectName}`)
            } else {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b nestjs-postgres-blank ${isFullstack ? "backend" : projectName}`)
            }
            break;

          case "MySQL (Prisma)":
            if(project.sample === 'yes') {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b nestjs-mysql ${isFullstack ? "backend" : projectName}`)
            } else {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b nestjs-mysql-blank ${isFullstack ? "backend" : projectName}`)
            }
            break;

          default:
            break;
        }
        break;

      case "Fastify":
        switch (project.database) {
          case "MongoDB (Mongoose)":
            if(project.sample === 'yes') {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b fastify-mongodb ${isFullstack ? "backend" : projectName}`)
            } else {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b fastify-mongodb-blank ${isFullstack ? "backend" : projectName}`)
            }
            break;

          case "PostgreSQL (Prisma)":
            if(project.sample === 'yes') {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b fastify-postgres ${isFullstack ? "backend" : projectName}`)
            } else {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b fastify-postgres-blank ${isFullstack ? "backend" : projectName}`)
            }
            break;

          case "MySQL (Prisma)":
            if(project.sample === 'yes') {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b fastify-mysql ${isFullstack ? "backend" : projectName}`)
            } else {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b fastify-mysql-blank ${isFullstack ? "backend" : projectName}`)
            }
            break;

          default:
            break;
        }
        break;

      default:
        break;
    }
  }

  if(project.projectType !== 'Backend') {
    switch (project.frontend) {
      case "Vue":
        switch (project.css) {
          case "Bootstrap":
            if(project.sample === 'yes') {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b vue-bootstrap ${isFullstack ? "frontend" : projectName}`)
            } else {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b vue-bootstrap-blank ${isFullstack ? "frontend" : projectName}`)
            }
            break;

          case "Tailwind":
            if(project.sample === 'yes') {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b vue-tailwind ${isFullstack ? "frontend" : projectName}`)
            } else {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b vue-tailwind-blank ${isFullstack ? "frontend" : projectName}`)
            }
            break;


          default:
            break;
        }
        break;

      case "React":
        switch (project.css) {
          case "Bootstrap":
            if(project.sample === 'yes') {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b react-bootstrap ${isFullstack ? "frontend" : projectName}`)
            } else {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b react-bootstrap-blank ${isFullstack ? "frontend" : projectName}`)
            }
            break;

          case "Tailwind":
            if(project.sample === 'yes') {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b react-tailwind ${isFullstack ? "frontend" : projectName}`)
            } else {
              runCommand(`${isFullstack ? "cd " + projectName + " && " : ""}git clone --quiet --depth 1 https://github.com/luthfimaajid/create-kuproy -b react-tailwind-blank ${isFullstack ? "frontend" : projectName}`)
            }
            break;

          default:
            break;
        }
        break;


      default:
        break;
    }
  }

  if (isFullstack) {
    fs.rm(`./${projectName}/frontend/.git`, {recursive: true}, (err) => {
      if(err) {
        console.error(err);
      }
    })

    fs.rm(`./${projectName}/backend/.git`, {recursive: true}, (err) => {
      if(err) {
        console.error(err);
      }
    })
    if (project.sample === 'yes'){
      console.log(`Installing dependency...`);
      runCommand(`cd ${projectName}/frontend && npm install`);
      runCommand(`cd ${projectName}/backend && npm install`);
    }
  } else {
    fs.rm(`./${projectName}/.git`, {recursive: true}, (err) => {
      if(err) {
        console.error(err);
      }
    })

    if (project.sample === 'yes'){
      console.log(`Installing dependency...`);
      runCommand(`cd ${projectName} && npm install`);
    }
  }

  console.log(`\n\nDone. Project initiated`);

  console.log(`\ncd ${projectName}`);

	debug && log(flags);
})();
