# kuproy
## Features
---
There will be some options that you can choose based on your needs:
* Fullstack (Bootstrap CSS Framework)
    * Vue & MongoDB
    * Vue * PostgreSQL
* Frontend (Vue)
    * Bootstrap
    * Tailwind
* Backend (Express)
    * MongoDB
    * PostgreSQL

## Getting Started
---
### **Prerequisites**
You need to have a git client to clone the repository. You can get it from http://git-scm.com/.

Also you must to have node.js and npm (node.js package manager). You can get them from http://nodejs.org/.

In case you choose to generate the implemented sample, in order to work with database, you should have installed MongoDB or PostgreSQL, depends on the database you choose. Instructions on installation can be found here: 
* [MongoDB](https://docs.mongodb.com/manual/installation/)
* [PostgreSQL](https://www.postgresql.org/download/)

### **How To Run**
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Run Code**

To use the CLI, run this code:
```
$ npx create-kuproy@latest [project-name]
```
You can specify the project name with anything you want. You can leave it blank like this:
```
$ npx create-kuproy@latest
```
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Specify Project Name**

If you didn't specify the project name previously, you will be asked to type in the project name after you run the code. If you leave it on blank, the project will be generated with our default project name (my-project).

```
? Project name (my-project) [project-name]
```
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Select Project Type**

After project name, you will be asked to choose project type. Fullstack type will generate both backend and frontend.
```
? Project type (use arrow keys)
> Fullstack
  Backend
  Frontend
```
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Choose database**

Choose the database for the backend, both database using an ORM which simplifies the development(you don’t need to connect to the database manually). 
> This step will only occur if you choose to generate fullstack or backend project.
```
Configure backend
? Database (use arrow keys)
> MongoDB (Mongoose)
  PostgreSQL (Prisma)
```
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Choose CSS framework**

Choose the CSS framework for the frontend.
> This step will only occur if you choose to generate frontend project.
```
Configure frontend
? CSS framework (Use arrow keys)
> Bootstrap
  Tailwind
```
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. Example Project**

Last dialog is to decide wether you want to generate with the example project or just the skeleton project.
```
Example project 
? Do you want to generate example project? (Use arrow keys)
> yes
  no
```
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7. Installing Dependencies**

After the project is generated, you'll need to install the dependencies. Run this code in each generated project.
```
$ npm install 
```
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8. Configure Environtment Variable**

After the dependencies are installed, you need to configure the environtment variable on each folder. In the backend there is file named `.env` which contain variable for the database url, change it with your url.
```
DATABASE_URL=postgresql://admin:admin@localhost:5432/geotara
```
## Folder Structure
---
*Backend*:
* `src/config` - Configuration file
* `src/controllers` - Business process logic
* `src/middlewares` - Middlewares, such as authentication
* `src/models` — Entity model, migration script of the database
* `src/routes` — Routes endpoint
* `src/utils` — Common function (used in many places)
* `test/e2e` — e2e test file
* `test/unit` — Unit test file

*Frontend*:
* `public` — Contain static file
* `src/assets` — Assets such as images, icon, etc
* `src/components` — Vue reusable component (button, form, etc)
* `src/router` — Page routes handling
* `src/views` — Page element such as home, about, etc