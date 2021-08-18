import oas from 'fastify-swagger'
const apiRoutes = async (app) => {
  app.register(oas, require('../docs'))
  app.register(require('./v1/users'), { prefix: '/users' })
  app.register(require('./v1/authentication'))
  app.register(require('./v1/tenant'), { prefix: '/tenant' })
  app.register(require('./v1/patient'), { prefix: '/patient' })
}


module.exports = apiRoutes
