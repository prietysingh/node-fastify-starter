import Responder from '../../server/responder'
import patientService from '../services/patient/patient'

export default class TenantController {
    static async getByTenantId (req, res) {
        const patients = await patientService.getPatientByTenantId(req.params.tenantId)
        Responder.success(res, patients)
      }
}