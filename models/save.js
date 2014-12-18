"use strict";

module.exports = function(sequelize, DataTypes) {
  var save = sequelize.define("save", {
    template_id: DataTypes.INTEGER,
    user_twitlibs: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return save;
};
