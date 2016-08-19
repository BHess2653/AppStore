const expect = require('chai').expect;
const request = require('supertest');
const utool = require('fs-uTool');

describe('App Routes', () => {
  let server;
  let app;

  beforeEach(() => {
    server = require('../src/server');
  });

  afterEach(() => {
    server.close();
  });

  // Test for Multiple Apps
  it('GET /api/v1/characters returns multiple apps', (done) => {
    request(server)
      .get('/api/v1/characters')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const apps = res.body;

        // Save one single app from the list to test on in later tests
        this.app = apps[0];

        expect(apps.length).to.be.above(0);
      })
      .end(done);
  });

  // Test for a single app
  it('GET /api/v1/characters/:id returns an app obj with id, title, description, and releaseDate properties', (done) => {
    request(server)
      .get('/api/v1/characters/' + this.app.id)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        app = res.body;
        expect(app).to.have.property('id');
        expect(app).to.have.property('name');
        expect(app).to.have.property('class');
        expect(app).to.have.property('spec');
      })
      .end(done);
  });
});
