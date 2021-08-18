'use strict';
module.exports = (sequelize, DataTypes) => {
  const patient = sequelize.define('patient', {
    fullName: DataTypes.STRING,
    accountNo: DataTypes.STRING,
    ssn: DataTypes.STRING,
    dob: DataTypes.DATE,
    clientName: DataTypes.STRING,
    subscriberId: DataTypes.STRING,
    TenantId: DataTypes.INTEGER
  }, {});
  patient.associate = function(models) {
    patient.belongsTo(models.Tenant)
  };
  return patient;
};