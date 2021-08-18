import bcrypt from 'bcrypt'
import db from '../../models/index';
import userService from '../../services/users/userService'

const patient = db.patient;

const patientService = {
  async getPatientByTenantId(tenantId) {
    return await patient.findAll({where: {TenantId: tenantId}});
  }
}

export default patientService
