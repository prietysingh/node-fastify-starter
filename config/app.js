const convict = require('convict')

const config = convict({
  app: {
    name: {
      doc: 'Name of the service',
      format: String,
      default: 'Node Boilerplate'
    }
  },

  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'staging', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },

  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3000,
    env: 'PORT'
  },

  sentry_dns: {
    doc: 'sentry dns',
    format: String,
    default: '',
    env: 'SENTRY_DNS'
  },

  log_level: {
    doc: 'level of logs to show',
    format: String,
    default: 'debug',
    env: 'APP_LOG_LEVEL'
  },
  db: {
    name: {
      doc: 'Database Name',
      format: String,
      default: 'postgres',
      env: 'DB_NAME'
    },
    user: {
      doc: 'Database user',
      format: String,
      default: 'postgres',
      env: 'DB_USER'
    },
    password: {
      doc: 'Database password',
      format: '*',
      default: 'P@ssword.01',
      env: 'DB_PASSWORD'
    },
    host: {
      doc: 'DB host',
      format: String,
      default: 'node-poc-321706:asia-south1:nodegcp-poc',
      env: 'DB_HOST'
    },
    port: {
      doc: 'DB PORT',
      format: 'port',
      default: '5432',
      env: 'DB_PORT'
    }
  },
  secret_key: {
    doc: 'App authentication secret key.',
    format: String,
    default: 'nutech secret key',
    env: 'SECRET_KEY'
  },
})

config.validate({ allowed: 'strict' })

module.exports = config
