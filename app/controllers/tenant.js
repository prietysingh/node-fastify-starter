import Responder from '../../server/responder'
import tenantService from '../services/tenant/tenant'

export default class TenantController {
    static async getByUserId (req, res) {
        const permissions = await tenantService.getPermissionByUser(req.params.userId)
        Responder.success(res, permissions)
      }
      static async update (req, res) {
        const tenant = await tenantService.updateTenant(req.body, req.params.userId)
        Responder.created(res, tenant)
      }
}