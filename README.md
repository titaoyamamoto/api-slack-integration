# api-slack-integration

Is a simple API to integrate the Slack (team communication) with ChatBot (Watson Assistant). 

Technologies: [Slack](slack.com) (Team communication) - [HapiJS](https://hapijs.com) (To create the API and endpoint) - [Swagger](https://github.com/glennjones/hapi-swagger) (HapiJS's plugin to create the documentation using the input and output configurations) - [Docker](https://www.docker.com) (To up the API in the development environment) - [API Watson assistant](https://github.com/titaoyamamoto/api-watson-assistant) (Simple API to interact with Watson Assistant).

## Configurations

Accessing the **application.config.js** file, you can change the file with your informations.

## Running

To run the API is possible to use the makefile or do specific code separate. 

**Using Makefile** - You can check commands in makefile 

Up the API
```bash
make up
```
Down the API
```bash
make down
```

**Using NPM**

Up the API
```bash
npm start
```

## Endpoints

You can check and test the endpoint accessing the swagger:

[http://localhost:3100/documentation](http://localhost:3100/documentation)