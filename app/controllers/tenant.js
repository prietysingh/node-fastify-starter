import Responder from '../../server/responder'
import tenantService from '../services/tenant/tenant'

export default class TenantController {
    static async getByUserId (req, res) {
        const permissions = await tenantService.getPermissionByUser(req.params.userId)
        Responder.success(res, permissions)
      }
    
}