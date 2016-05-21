module.exports = require('rc')('david', {
  brains: {
    cacheTime: 86400000
  },
  github: {
    api: {
      version: '3.0.0',
      protocol: 'https',
      host: 'api.github.com'
    },
    oauth: {
      secret: null
    },
    token: null
  },
  npm: {
    hostname: 'https://www.npmjs.com',
    options: {
      registry: 'http://registry.npmjs.org'
    },
    feed: 'https://skimdb.npmjs.com/registry'
  },
  site: {
    hostname: 'http://localhost:1337'
  },
  db: {
    path: 'data'
  },
  nsp: {
    syncAdvisoriesInterval: 3600000
  },
  public: {
    siteUrl: 'http://localhost:1337',
    apiUrl: 'http://localhost:1337',
    github: {
      protocol: 'https',
      host: 'github.com',
      oauth: {
        id: null
      }
    }
  }
})
