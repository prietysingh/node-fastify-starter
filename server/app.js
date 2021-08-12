import { join } from 'path'
import AutoLoad from 'fastify-autoload'
import noIcon from 'fastify-no-icon'
import helmet from 'fastify-helmet'
import qs from 'qs'
import cors from 'fastify-cors'
import Raven from './raven'
import logger from './logger'
//import cors from 'cors'

export default function NodeServer(fastify, opts, next) {
  fastify.use(Raven.requestHandler())
  fastify.options('/*', (req, reply) => reply.send());
  // fastify.register(cors, {
  //   allowedHeaders: ['Content-Type', 'Authorization']
  // })
  // fastify.use(cors())
  fastify.register(cors, {
    origin: /\*/,
    allowedHeaders: ['Origin', 'X-Requested-With', 'Accept', 'Content-Type', 'Authorization'],
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS']
 })
  fastify.register(helmet)
  fastify.register(noIcon)

  fastify.use(function (req, res, next) {
    req.logger = logger
    next()
  })

  // This loads all application wide plugins defined in plugins folder
  fastify.register(AutoLoad, {
    dir: join(__dirname, '../app/plugins'),
    includeTypeScript: true,
    options: { ...opts }
  })

  fastify.register(require('../app/routes/api'), { prefix: 'api/v1' });

  fastify.setErrorHandler(function errorHandler(err, req, reply) {
    Raven.errorHandler(err, req)
    reply.status(500).send({
      error: err.stack
    })
  })

  next()
}

NodeServer.options = {
  querystringParser: (str) => qs.parse(str),
  logger: { level: 'info' },
  ignoreTrailingSlash: true
}
