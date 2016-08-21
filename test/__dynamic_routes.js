const expect = require('chai').expect;
const request = require('supertest');
const faker = require('faker');
const util = require('../lib/util');


describe('Dynamic Routes Test ', () => {
  let server;

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Start server before stubs
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  beforeEach('Open Server', (done) => {
    server = require('../src/server');

    util.debug('Server Open ', '✓ Success ✓');
    done();
  });

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Close server after stubs
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  afterEach('Close Server', (done) => {
    server.close();
    util.debug('Server Close ', '✓ Success ✓');
    done();
  });

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Array of all routes
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  const routesObject = {

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // User routes
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    users: [
      {
        route: '/api/v1/users',
        method: 'get',
        desc: 'Searches All Users',
      },
      {
        route: '/api/v1/users/:id',
        method: 'get',
        desc: 'Searches One User',
      },
      {
        route: '/api/v1/users/:id',
        method: 'delete',
        desc: 'Removes One User',
      },
      {
        route: '/api/v1/users/2',
        method: 'post',
        desc: 'Updates One User',
        fakeData: {
          name: faker.name.findName(),
        },
      },
      {
        route: '/api/v1/users/',
        method: 'post',
        desc: 'Adds One User',
        fakeData: {
          name: faker.name.findName(),
        },
      },
    ],

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // Character routes
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    characters: [
      {
        route: '/api/v1/characters',
        method: 'get',
        desc: 'Searches All Characters',
      },
      {
        route: '/api/v1/characters/:id',
        method: 'get',
        desc: 'Searchse One Character',
      },
      {
        route: '/api/v1/users/2/characters',
        method: 'get',
        desc: 'Searches All Characters for One User',
      },
      {
        route: '/api/v1/characters/:id',
        method: 'delete',
        desc: 'Removes One Character',
      },
      {
        route: '/api/v1/characters/2',
        method: 'post',
        desc: 'Updates One Character',
        fakeData: {
          name: faker.name.findName(),
          class: faker.random.word(),
          spec: faker.random.words(),
        },
      },
      {
        route: '/api/v1/characters/',
        method: 'post',
        desc: 'Adds One Character',
        fakeData: {
          name: faker.name.findName(),
          class: faker.random.word(),
          spec: faker.random.words(),
          userId: 2,
        },
      },
    ],
  };

  function methodCheck(route) {
    if (route.method === 'get') {
      it(`${route.desc}`, (done) => {
        request(server)
        .get(route.route)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err) => {
          if (err) util.debug('GET route error ', err);
          done();
        });
        util.debug('GET route hit ', route.route);
      });
    } else if (route.method === 'post') {
      it(`${route.desc}`, (done) => {
        request(server)
          .post(route.route)
          .send(route.fakeData)
          .expect(200)
          .end((err) => {
            if (err) util.debug('POST route error ', err);
            done();
          });
        util.debug('POST route hit ', route.route);
      });
    } else {
      it(`${route.desc}`, (done) => {
        request(server)
          .delete(route.route)
          .expect(200)
          .end((err) => {
            if (err) util.debug('DELETE route error ', err);
            done();
          });
        util.debug('DELETE route hit ', route.route);
      });
    }
  }

  routesObject.users.forEach(methodCheck);
  routesObject.characters.forEach(methodCheck);
});
