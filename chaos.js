const debug = require('debug')('yeps:chaos:chaos');
const pause = require('promise-pause-timeout');

debug('Chaos kernel created');

const timeout = delay => pause(delay);

const error = () => Promise.reject(new Error('Chaos'));

module.exports = {
  timeout,
  error,
};
