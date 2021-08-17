import bcrypt from 'bcrypt'
import db from '../../models/index';

const User = db.User;
const Tenant = db.Tenant;

const userService = {
  async getAll () {
    return await User.findAll();
  },
  async getUser (id) {
    return await User.findOne({where: {id: id}});
  },
  async createUser (user) {
    user.password = bcrypt.hashSync(user.password
      , bcrypt.genSaltSync(8))
    return await User.create(user)
  },
  async loginUser (req) {
    let user = await User.findOne({ where: { email: req.email}, include: {
      model: Tenant
    }})
    if(user) {
      if(bcrypt.compareSync(req.password, user.password)) {
        return user;
      }
    }
    return ;
  }
}

export default userService
