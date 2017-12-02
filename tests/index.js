const chai = require('chai');
const chaiHttp = require('chai-http');
const App = require('yeps');
const srv = require('yeps-server');
const error = require('yeps-error');
const config = require('config');
const chaos = require('..');

const { expect } = chai;

chai.use(chaiHttp);
let app;
let server;

describe('YEPS chaos test', () => {
  beforeEach(() => {
    app = new App();
    app.then(error());
    server = srv.createHttpServer(app);
  });

  afterEach((done) => {
    server.close(done);
  });

  it('should test disabled', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    config.chaos.enabled = false;

    app.then(chaos());
    app.then(async (ctx) => {
      isTestFinished1 = true;
      ctx.res.end();
    });

    await chai.request(server)
      .get('/')
      .send()
      .then((res) => {
        expect(res).to.have.status(200);
        isTestFinished2 = true;
      });

    expect(isTestFinished1).is.true;
    expect(isTestFinished2).is.true;
  });

  it('should test enable with error', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    config.chaos.enabled = true;
    config.chaos.timeout.probability = 0;
    config.chaos.error.probability = 1;

    app.then(chaos());
    app.then(async (ctx) => {
      isTestFinished1 = true;
      ctx.res.end();
    });

    await chai.request(server)
      .get('/')
      .send()
      .catch((err) => {
        expect(err).to.have.status(500);
        expect(err.response.headers['x-chaos']).to.be.equal('1');
        expect(err.response.text).to.be.equal('Chaos');
        isTestFinished2 = true;
      });

    expect(isTestFinished1).is.false;
    expect(isTestFinished2).is.true;
  });

  it('should test enable with timeout', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    config.chaos.enabled = true;
    config.chaos.timeout.probability = 1;
    config.chaos.timeout.time = 1;
    config.chaos.error.probability = 0;

    app.then(chaos());
    app.then(async (ctx) => {
      isTestFinished1 = true;
      ctx.res.end();
    });

    await chai.request(server)
      .get('/')
      .send()
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.headers['x-chaos']).to.be.equal('1');
        isTestFinished2 = true;
      });

    expect(isTestFinished1).is.true;
    expect(isTestFinished2).is.true;
  });

  it('should test enable all', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    config.chaos.enabled = true;
    config.chaos.timeout.probability = 1;
    config.chaos.timeout.time = 1;
    config.chaos.error.probability = 1;

    app.then(chaos());
    app.then(async (ctx) => {
      isTestFinished1 = true;
      ctx.res.end();
    });

    await chai.request(server)
      .get('/')
      .send()
      .catch((err) => {
        expect(err).to.have.status(500);
        expect(err.response.headers['x-chaos']).to.be.equal('1');
        expect(err.response.text).to.be.equal('Chaos');
        isTestFinished2 = true;
      });

    expect(isTestFinished1).is.false;
    expect(isTestFinished2).is.true;
  });
});
