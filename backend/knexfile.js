// Update with your config settings.

module.exports = {
  
  test: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'news_summaries',
      user:     'postgres',
      password: '1234qwer',
      port: '5432',
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },

  test: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'news_summaries',
      user:     'postgres',
      password: '1234qwer',
      port: '5432',
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'my_db',
      user:     'username',
      password: 'password',
      port: '5432',
    },
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: '5432',
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  }

};
