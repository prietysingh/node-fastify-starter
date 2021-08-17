'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    company: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    TenantId: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.Tenant)
  };
  return User;
};