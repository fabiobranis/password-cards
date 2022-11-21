# Password Cards Velozient Assessment

## About the app

This is a fullstack mono repo application. This app is intended to be a simple password manager with in memory storage.
This monorepo have only one entry point for liniting things in the root of the app. I didn't saw any necessity of shared folders for this project, but if it was necessary, it will exposed in the root with a proper package.json and used on the backend/frontend app.

## Tech stack

### Backend

* node.js 18 or higher
* express.js 4 or higher

### Front end

* Vue.js (with Vite)
* Pinia (state management)
* Tailwind CSS (css framework)

## Testing

I've put little testing, more unit oriented. But I know how to setup e2e testes with both frameworks (vitest and jest).

For front end I used vitest and for backend jest.

## Design decisions

### Backend

It's a simple MVC for a Rest API. 
You'll see basically routes delegating to controllers and controllers delegating to services. The controllers receive the request and send back responses. The services are the business logics and the model is inside the db folder (and used by the service).
We have some utilities for http error handler, the idea is to have only one way to handle http responses for errors.
The validation is made in two steps, basic validations are made using a middleware (and the JOI lib). Database validations are made in the service, once it's merely business rules and the business rules are primary made in services.
The validation middleware uses the validators, validators are definitions of a set of rules for a given entity.

### Front end

The  front end is a simple Vue.js app with pinia as state manager.
I've break the app into some importante parts:
* components: Represents the visual components
* forms: Represents the set of visual components for a given entity
* pages: Container for forms and lists
* stores: Where the data lives
* types: Definition of an entity

Also we have some utilities in the utils folder:
* client: This is a fetch client and is a way to encapsulate the boilerplate to build a fetch request
* http-validation-errors.parser: A parser for http errors

I used the pinia as a state manager in order to show how I like to use state managers for a given situation. The situation in the app is to filter the password cards. Obviously we can make use of event bus, but I don't believe that is the best practice, once is dificult to know who are the listeners of a given event. The state manager is easier to maintain in this case, and pinia is pretty easy to work if compared to vuex.
Regarding the CSS part, I used the Tailwind CSS framework and I do prefer to work with grid for multidimensional items, such as the list of password cards that can be broken into lines and I like to work with flex box for one dimensional items, so you are going to see the content of a line inside some flex box. PS: I do like to do it so using only CSS as well.

## How to deploy it

### With make
I've created a makefile to encapsulate the bash commands to it so.
So, you need the gnu make in order to use the makefile.
Pre requisites:
* GNU make
* Docker
* Node.js and npm

Basically when you issue the make command, the application is going to install dependencies for testing and linting, build server side docker, build client and then after start the app using docker compose.

### Without make

You can start the app from the root issuing `npm run start:dev` or you can:
`cd server && docker build . -t fabio-nunes/velozient-server`
`cd client && docker build . -t fabio-nunes/velozient-client`
`cd.. && docker compose up -d`

