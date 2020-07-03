# node-graphql-server

node-graphql-server is a complete implementation of GraphQL with nodejs.It includes two runtime libraries, Apollo Server and Apollo Client, for building and querying your graph's API.

node-graphql-server is the integration of GraphQL with nodejs and GraphQL is the specification that we are using to communicate between our graph API and client

## Requirements

To run this project, you will only need Node.js, Postgres, Graphql installed on your environement.
You can use the appropriate Editorconfig plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v10.14.2

    $ npm --version
    6.4.1

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

#### Postgres installation on Linux

Just go on [official postgresql website](https://www.postgresql.org/) & grab the database.

---

## Install

    $ git clone https://github.com/Reactongraph/node-graphql-server.git
    $ cd node-graphql-server
    $ npm install

#### or

    $ yarn

### Configure app

Edit `config.json` inside config folder with the url where you have setup:

- Postgres username, password
- Postgres database name
- Project host

## Start & watch

### To run in development

    $ sudo yarn dev

#### or

    $ sudo npm dev

### To run in production

    $ sudo yarn start

#### or

    $ sudo npm start

## Postgres Relations

#### Postgres Model Creation

    $ sequelize model:create --name Relation_Name --attributes attribute_name:attribute_type
    ex: sequelize model:create --name User --attributes username:string,password:string

#### Database migration

    $ sequelize db:migrate

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

To run those 3 commands you can just do

    $ npm run pull

## .gitignore

A gitignore file specifies intentionally untracked files that Git should ignore.

- node_modules
- package-lock.json
- eslintrc

## Languages & tools

### HTML

- [Jade](http://jade-lang.com/) for some templating.

### JavaScript

- [ESLINT](https://eslint.org/) is used to prevent JavaScript and JSX error.
- [express](https://expressjs.com/) is a web framework for Node.js.
- [graphql](https://graphql.org/) is a query language to handle request.
- [sequelize](http://docs.sequelizejs.com/) a promise-based ORM for Node.js
- [React](http://facebook.github.io/react) is used for UI.
