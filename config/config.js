var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'portfolio'
    },
    port: 3000,
    db: 'mongodb://localhost/portfolio-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'portfolio'
    },
    port: 3000,
    db: 'mongodb://localhost/portfolio-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'portfolio'
    },
    port: 3000,
    db: 'mongodb://localhost/portfolio-production'
  }
};

module.exports = config[env];
