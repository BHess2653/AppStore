[ ![Codeship Status for BHess2653/AppStore](https://codeship.com/projects/f58d8630-4a6a-0134-5104-36ee05b9dbad/status?branch=master)](https://codeship.com/projects/169657)
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

## Debug usage

Turn debug on
```
DEBUG=true node src/server.js
```

Debug has colors added to it to show what happened.

| Type | Color |
|---|---|
| create | green |
|read | yellow |
| update | magenta |
| delete | red |

Sample debug output
```
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
DB sync "✓ Success ✓"
Sun Aug 14 2016 22:38:02 GMT-0400 (EDT)
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Server active on 3000
Sun Aug 14 2016 22:38:02 GMT-0400 (EDT)
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
```

## Routes

CRUD for Users

| Method | URL | Response |
|---|---|---|---|
| POST | /api/v1/users | [{ id: ‘#’, name: ‘UserName’ }] |
| GET | /api/v1/users | [{ id: '#', name: 'UserName'}, { id: '#', title: 'UserName2'}] |
| GET | /api/v1/users/:id | [{ id: ‘#’, name: ‘UserName2’ }] |
| POST | /api/v1/users/:id | [{ id: ‘#’, name: ‘UpdatedUserName’ }] |
| DELETE | /api/v1/users/:id | [] |

CRUD for Apps

| Method | URL | Response |
|---|---|---|---|
| POST | /api/v1/apps | [{ id: '#', title: 'FirstApp', description: 'AppDescription', releaseDate: '2016-08-04T16:52:49+00:00', }] |
| GET | /api/v1/apps/:id | [{ id: '#', title: 'SecondApp', description: 'AppDescription', releaseDate: '2016-08-04T16:52:49+00:00', }] |
| GET | /api/v1/users/:id/apps | [{ id: '#', title: 'FirstApp', description: 'AppDescription', releaseDate: '2016-08-04T16:52:49+00:00', }] |
| GET | /api/v1/apps | [{ id: '#', title: 'FirstApp', description: 'AppDescription', releaseDate: '2016-08-04T16:52:49+00:00', }, { id: '#', title: 'SecondApp', description: 'AppDescription', releaseDate: '2016-08-04T16:52:49+00:00', }] |
| POST | /api/v1/apps/:id | [{ id: '#', title: 'UpdatedAppName', description: 'AppDescription', releaseDate: '2016-08-04T16:52:49+00:00', }] |
| DELETE | /api/v1/apps/:id | [] |


## Deployment Process
...
