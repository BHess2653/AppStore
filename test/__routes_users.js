const expect = require('chai').expect;
const request = require('supertest');
const App = require('../src/models/characters');
const utool = require('fs-uTool');

describe('User Routes', () => {
  let server;
  let user;

  beforeEach(() => {
    server = require('../src/server');
  });

  afterEach(() => {
    server.close();
  });

  // Test for Multiple Users
  it('GET /api/v1/users returns multiple users', (done) => {
    request(server)
      .get('/api/v1/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const users = res.body;

        // Save one single user from the list to test on in later tests
        this.user = users[0];

        expect(users.length).to.be.above(0);
      })
      .end(done);
  });

  // Test for a single user
  it('GET /api/v1/users/:id returns an user obj with a id and name property', (done) => {
    request(server)
      .get('/api/v1/users/' + this.user.id)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        user = res.body;
        expect(user).to.have.property('id');
        expect(user).to.have.property('name');
      })
      .end(done);
  });

  // Test for the Apps of a Specific user
  it('GET /api/v1/users/:id/characters should find all apps for a user', (done) => {
    const newApp = {
      name: 'Jimmy101',
      class: 'Hunter',
      spec: 'Arcblade',
      userID: this.user.id,
    };

    App.add(newApp, (err) => {

    }, (appData) => {
      request(server)
        .get('/api/v1/users/' + this.user.id + '/characters')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
          const apps = res.body;

          // Save one single app from the list to test on in later tests
          expect(apps.length).to.be.above(0);
        })
        .end(done);
    });
  });
});
