# Appstore
This is a Static API demonstration, using fake data.

## Installation

Install all dependencies
```
npm install
```

Install all command line tools
```
npm i -g mocha
```


## Start the server

To run the server with default settings run
```
npm start
```


## Run the Unit tests

To run the unit tests
```
npm test
```


## routes

| Method | URL | Response |
|---|---|---|---|
| GET | /api/v1/users | [{ id: ‘#’, name: ‘UserName’ }, { id: ‘#’, name: ‘UserName2’ }] |
| GET | /api/v1/apps | [{ id: '#', title: 'appName', description: 'AppDescription', releaseDate: '2016-08-04T16:52:49+00:00', }, { id: '#', title: 'app2Name', description: 'App2Description', releaseDate: '2016-08-04T16:52:49+00:00', }] |
| GET | /api/v1/users/:id | [{ id: ‘#’, name: ‘UserName’ }] |
| GET | /api/v1/apps/:id | [{ id: '#', title: 'appName', description: 'AppDescription', releaseDate: '2016-08-04T16:52:49+00:00', }] |
