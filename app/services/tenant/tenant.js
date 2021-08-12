import bcrypt from 'bcrypt'
import db from '../../models/index';
import userService from '../../services/users/userService'

const Tenant = db.Tenant;

const tenantService = {
  async getAll () {
    return await Tenant.findAll();
  },
  async getTenant (id) {
    return await Tenant.findOne({where: {id: id}});
  },
  async getPermissionByUser(userId) {
    const user = await userService.getUser(userId);
    if(user.tenantId)
        return await this.getTenant(user.tenantId);
    return null
  }
}

export default tenantService
