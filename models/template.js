"use strict";

module.exports = function(sequelize, DataTypes) {
  var template = sequelize.define("template", {
    category_id: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return template;
};
