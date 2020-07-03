'use strict';

const constant = require('../utils/constant');

const { reference } = constant;
const { user } = reference;

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  User.associate = (models) => {
    User.hasMany(models.Message, {
      foreignKey: user,
      as: 'messages',
    });
  };
  return User;
};
