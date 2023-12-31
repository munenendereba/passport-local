# Sample Passport Local Authentication

## Problem

The need to update use passport local authentication in a node application.

## Description

The solution aspires to accomplish the following:

## Getting Started

### Dependencies

- You need Node installed in your environment
- npm packages required: express, sharp, morgan-body, mariadb, sequelize, body-parser, ejs and nodemon (for dev auto-restart)

### Installing

- Just clone the repo or download from this repo
- Copy to a directory in your computer.

#### Set up your .env

Using the [.env.example](./.env.example) file, edit the values of the db connection as you wish, then rename the file as .env.

Ensure you are able to connect to the db.

#### Run the migration

#### Run the seed

#### Run the app

#### Set up postman

### Executing program

- Install all the dependencies as shown above by running commands below

```
npm init -y
```

If any dependency is not installed, you can install as below:

```
- npm install express sharp morgan-body sequelize ejs mariadb body-parser
- npm install --save-dev nodemon
```

Start the application using the normal npm commands:

```
npm run dev
```

## Packages used

- [express](https://www.npmjs.com/package/express) for handling server requests and routing
- [ejs](https://www.npmjs.com/package/ejs) template engine for node to create front-end pages
- [body-parser](https://www.npmjs.com/package/body-parser) enable parsing of requests and responses
- [dotenv](https://www.npmjs.com/package/dotenv) for loading environment variables from .env file
- [mariadb](https://www.npmjs.com/package/mariadb) for handling connection to MariaDB database
- [sequelize](https://www.npmjs.com/package/sequelize) ORM for handling db CRUD operations
- [express-session](https://www.npmjs.com/package/express-session) for handling sessions
- [passport](https://www.npmjs.com/package/passport) for handling authentication
- [passport-local](https://www.npmjs.com/package/passport-local) for handling local authentication

## Improvements

The project needs to improve in the following:

-

## Help

If you get errors when processing, check the following:

-

## Authors

[Munene Ndereba](https://github.com/munenendereba)

## Version History

- 0.0.1

  - Initial release
  - See [commit change]()

## License

This project is licensed under the MIT License.

## References and Acknowledgments

- Inspired by the [Medim Post](https://medium.com/@prashantramnyc/node-js-with-passport-authentication-simplified-76ca65ee91e5)
