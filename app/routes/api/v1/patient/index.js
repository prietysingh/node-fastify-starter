import {getPatients} from './type'
import PatientController from '../../../../controllers/patient'

const patientRoutes = async (app) => {
  app.addHook('preHandler', (request, reply, done) => {
    app.log.info('request.query', request.query)
    app.authenticate(request, reply)
    done()
  })

  app.get('/:tenantId', {schema: getPatients}, PatientController.getByTenantId)

}

module.exports = patientRoutes
