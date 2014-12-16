"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("saveds", {
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
        type: DataTypes.STRING
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
    migration.dropTable("saveds").done(done);
  }
};