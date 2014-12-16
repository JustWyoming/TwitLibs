"use strict";

module.exports = function(sequelize, DataTypes) {
  var saved = sequelize.define("saved", {
    template_id: DataTypes.INTEGER,
    user_twitlibs: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return saved;
};
