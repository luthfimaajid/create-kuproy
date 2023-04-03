# kuproy
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/luthfimaajid/create-kuproy/blob/main/README.md)
[![id](https://img.shields.io/badge/lang-id-yellow.svg)](https://github.com/luthfimaajid/create-kuproy/blob/main/README.id.md)
## Features
---
There will be some options that you can choose based on your needs:
* Backend Framework
    * Express
    * Fastify
* Database
    * Mongodb (Mongoose)
    * MySQL (Prisma)
    * PostgreSQL (Prisma)
* Frontend Framework
    * React
    * Vue 
* CSS/UI Framework 
    * Bootstrap
    * Tailwind

You can choose to generate backend or frontend only, or you can generate both if you want a fullstack application.

### **Example Project**
We provide example project contain ready to run script. Example project can only be generated for fullstack project, thus example project consist of backend and frontend project. Our purpose is to provide a project that can help newbies to learn basic of web development such as UI (frontend), API and database (backend), and basic CRUD operation.

## Getting Started
---
### **Prerequisites**
You need to have a git client to clone the repository. You can get it from http://git-scm.com/.

Also you must to have node.js and npm (node.js package manager). You can get them from http://nodejs.org/.


### **How To Run**
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Run Code**

To use the CLI, run this code on your terminal:
```
$ npx create-kuproy@latest
```
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Specify Project Name**

If you didn't specify the project name previously, you will be asked to type in the project name after you run the code. If you leave it on blank, the project will be generated with our default project name (my-project).

```
? Project name (my-project) [project-name]
```
The name of the project should only contain alphabet, number, dash (-), and underscore (_), for example: My-project_123

**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Select Project Type**

After project name, you will be asked to choose project type. Fullstack type will generate both backend and frontend.
```
? Project type (use arrow keys)
> Fullstack
  Backend
  Frontend
```
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Choose Backend Framework**

Choose the backend framework for your project. 
> This step will only occur if you choose to generate fullstack or backend project.
```
Configure backend
? Backend Framework (use arrow keys)
> Express
  Fastfy 
```

**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Choose database**

Choose the database for the backend, both database using an ORM which simplifies the development(you don’t need to connect to the database manually). 
> This step will only occur if you choose to generate fullstack or backend project.
```
? Backend Framework [Express/Fastify]
? Database Engine (use arrow keys)
> MongoDB (Mongoose)
  PostgreSQL (Prisma)
  MySQL (Prisma)
```
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. Choose frontend framework**

Choose the frontend framework.
> This step will only occur if you choose to generate frontend or fullstack project.
```
Configure frontend
? Frontend framework (Use arrow keys)
> React
  Vue
```

**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7. Choose CSS framework**

Choose the CSS framework for the frontend.
> This step will only occur if you choose to generate frontend  or fullstack project.
```
? Frontend framework [React/Vue]
? CSS/UI framework (Use arrow keys)
> Bootstrap
  Tailwind
```
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8. Example Project**

Last dialog is to decide wether you want to generate with the example project or just the skeleton project.
> This step will only occur if you choose to generate fullstack project.
```
Example project 
? Do you want to generate example project? (Use arrow keys)
> yes
  no
```
Go to the project folder by typing:
```
cd [project-name]
```
Replace project-name with the project name you specified.

## Running Example Project
### Prerequisite
To run the example project, in order to work with database, you should have installed MongoDB or PostgreSQL, or MySQL depending on the database you choose. Instructions on installation can be found here: 
* [MongoDB](https://docs.mongodb.com/manual/installation/)
* [PostgreSQL](https://www.postgresql.org/download/)
* [MySQL](https://www.mysql.com/downloads/)

### Configure backend
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Change directory to backend**

Make sure you follow the above step to change the directory to root project. Then go to the backend folder by typng:
```
cd backend
```

**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Configure Environtment Variable**

After the dependencies are installed, you need to configure the environtment variable. In the backend folder there is file named `.env` which contain variable for the database url, change it with your url.\
For Postgres and MySql:
```
DATABASE_URL=postgresql://admin:admin@localhost:5432/kuproy
```
For MongoDB:
```
MONGO_URI=mongodb://localhost:27017/kuproy-example?authSource=admin
```
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Postgres & MySQL**

If you are using postgres and mysql since we are using prisma as an ORM, please make sure to define schema on `schema.prisma` file inside `src/models` folder.\
You can refer to [this link](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference) for schema documentation.\
After defining the model, run this 2 script before starting the application.
```
npm run prisma:migrate:dev
npm run primsa:generate
```
Both code act as a migration script and generating model abstraction.

**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Run the project**

After the environtment is configured, run the project in dev mode by typing:
```
npm run dev
```

### Configure Frontend
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Change directory to frontend**

Open new terminal and go the root project directory then go to the frontend folder by typing:
```
cd frontend
```
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Run the project**

```
npm run dev 
```


## Folder Structure
---
*Backend*:
* `src/config` - Store configuration files that are used to set up the application's behavior such as database connection.
* `src/controllers` - Contain business logic of the app including process user input, communication with model, etc.
* `src/middlewares` - Contain middlewares function for preprocessing request before getting to the controller, such as authentication, data parsing, etc.
* `src/models` — Contain data model of the application and provides an abstraction layer for working with the data.
* `src/routes` — Store the application's route handlers. Route handlers are functions that are called when an HTTP request is made to a specific endpoint, or route, in the application.
* `src/utils` — Common function (used in many places)
* `test/e2e` — e2e test file
* `test/unit` — Unit test file

*Frontend*:
* `public` — Store static assets that are publicly accessible by the application's users. Static assets are files that are used by the application's pages.
* `src/assets` — Store static assets like images, fonts, and icons that are used by the application's pages and components.
* `src/components` — Store reusable UI components that can be used throughout the application. UI components are individual pieces of the user interface that can be combined together to create more complex UI elements.
* `src/router` — Store files and modules that handle the routing and navigation within the application. This can include defining the various routes that the application supports and mapping them to the appropriate components or views.
* `src/views` — Store files that represent the different views or pages of the application. Views are the individual pages or screens that the user interacts with in the application.