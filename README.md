# YEPS Chaos


Chaos Monkey implementation for YEPS

[![NPM](https://nodei.co/npm/yeps-chaos.png)](https://npmjs.org/package/yeps-chaos)

[![npm version](https://badge.fury.io/js/yeps-chaos.svg)](https://badge.fury.io/js/yeps-chaos)
[![Build Status](https://travis-ci.org/evheniy/yeps-chaos.svg?branch=master)](https://travis-ci.org/evheniy/yeps-chaos)
[![Coverage Status](https://coveralls.io/repos/github/evheniy/yeps-chaos/badge.svg?branch=master)](https://coveralls.io/github/evheniy/yeps-chaos?branch=master)
[![Linux Build](https://img.shields.io/travis/evheniy/yeps-chaos/master.svg?label=linux)](https://travis-ci.org/evheniy/)
[![Windows Build](https://img.shields.io/appveyor/ci/evheniy/yeps-chaos/master.svg?label=windows)](https://ci.appveyor.com/project/evheniy/yeps-chaos)

[![Dependency Status](https://david-dm.org/evheniy/yeps-chaos.svg)](https://david-dm.org/evheniy/yeps-chaos)
[![devDependency Status](https://david-dm.org/evheniy/yeps-chaos/dev-status.svg)](https://david-dm.org/evheniy/yeps-chaos#info=devDependencies)
[![NSP Status](https://img.shields.io/badge/NSP%20status-no%20vulnerabilities-green.svg)](https://travis-ci.org/evheniy/yeps-chaos)

[![Known Vulnerabilities](https://snyk.io/test/github/evheniy/yeps-chaos/badge.svg)](https://snyk.io/test/github/evheniy/yeps-chaos)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/evheniy/yeps-chaos/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/evheniy/yeps-chaos.svg)](https://github.com/evheniy/yeps-chaos/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/evheniy/yeps-chaos.svg)](https://github.com/evheniy/yeps-chaos/network)
[![GitHub issues](https://img.shields.io/github/issues/evheniy/yeps-chaos.svg)](https://github.com/evheniy/yeps-chaos/issues)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/evheniy/yeps-chaos.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

    
## How to install

    npm i -S yeps-chaos

## How to use

### Config

#### config/default.json

    {
      "chaos": {
        "enabled": true,
        "timeout": 30,
        "frequency": 10
      }
    }

#### app.js

    const App = require('yeps');
    
    const chaos = require('yeps-chaos);
    
    const app = new App();
    
    app.then(chaos());
    
    app.then(...)
    

#### [YEPS documentation](http://yeps.info/)

#### [Chaos Monkey](https://github.com/Netflix/SimianArmy/wiki/Chaos-Monkey)
