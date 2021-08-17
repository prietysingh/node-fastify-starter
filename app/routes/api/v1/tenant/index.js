import {getTenant} from './type'
import TenantController from '../../../../controllers/tenant'

const userRoutes = async (app) => {
  app.addHook('preHandler', (request, reply, done) => {
    app.log.info('request.query', request.query)
    app.authenticate(request, reply)
    done()
  })

  app.get('/:userId', {schema: getTenant}, TenantController.getByUserId)


}

module.exports = userRoutes
