const chai = require('chai');
const chaiHttp = require('chai-http');
const http = require('http');
const App = require('yeps');
const chaos = require('..');

const { expect } = chai;

chai.use(chaiHttp);
let app;
let server;

describe('YEPS test', () => {
  beforeEach(() => {
    app = new App();
    server = http.createServer(app.resolve());
  });

  afterEach(() => {
    server.close();
  });

  it('should test promise', async () => {
    let isTestFinished = false;

    app.then(chaos());
    app.then(async (ctx) => {
      expect(ctx.app).to.be.equal(app);

      ctx.res.end();
    });

    await chai.request(server)
      .get('/')
      .send()
      .then((res) => {
        expect(res).to.have.status(200);
        isTestFinished = true;
      });

    expect(isTestFinished).is.true;
  });
});
