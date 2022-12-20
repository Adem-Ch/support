const Sequilize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "users",
    {
      id: {
        type: Sequilize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      login: {
        type: Sequilize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequilize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequilize.STRING,
        allowNull: false,
      },
      department_id: {
        type: Sequilize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequilize.STRING,
        allowNull: false,
      },
      comments: {
        type: Sequilize.STRING,
        allowNull: false,
      },

      createdAt: {
        type: Sequilize.DATEONLY,
      },

      updatedAt: {
        type: Sequilize.DATEONLY,
      },
    }

    // {
    //   timestamps: false,
    // }
  );
};
