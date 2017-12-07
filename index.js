const debug = require('debug')('yeps:chaos:index');
const config = require('config');

const { timeout, error } = require('./chaos');

debug('Chaos module created');

module.exports = () => async (ctx) => {
  debug('Request');

  const enabled = !!config.chaos.enabled;
  debug('Enabled:', enabled);

  if (enabled) {
    ctx.res.setHeader('X-Chaos', 1);

    const timeoutProbability = parseInt(config.chaos.timeout.probability, 10);
    debug('Timeout probability:', timeoutProbability);

    if (Math.random() <= timeoutProbability) {
      debug('Chaos timeout is working...');

      const time = parseInt(config.chaos.timeout.time, 10);
      debug('Time:', time);

      ctx.res.setHeader('X-Chaos-Timeout', time);

      await timeout(time);
    }

    const errorProbability = parseInt(config.chaos.error.probability, 10);
    debug('Error probability:', errorProbability);

    if (Math.random() <= errorProbability) {
      debug('Chaos error is working...');

      ctx.res.setHeader('X-Chaos-Error', 1);

      return error();
    }
  }

  return Promise.resolve();
};
