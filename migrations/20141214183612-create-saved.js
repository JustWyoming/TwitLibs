"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("saves", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      template_id: {
        type: DataTypes.INTEGER
      },
      user_twitlibs: {
        type: DataTypes.TEXT
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("saves").done(done);
  }
};