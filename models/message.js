'use strict';

const constant = require('../utils/constant');

const { reference } = constant;
const { user } = reference;

module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    content: DataTypes.STRING,
  }, {});
  Message.associate = (models) => {
    Message.belongsTo(models.User, {
      foreignKey: user,
      onDelete: 'CASCADE',
    });
  };
  return Message;
};
