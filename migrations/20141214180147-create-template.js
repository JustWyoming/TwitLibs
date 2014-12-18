"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("templates", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      category_id: {
        type: DataTypes.INTEGER
      },
      content: {
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
    migration.dropTable("templates").done(done);
  }
};