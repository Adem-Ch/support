const Sequilize = require("sequelize");

const sequelize = new Sequilize("stp_base", "root", "864307", {
  host: "localhost",
  dialect: "mysql",
});

const User = require("./user")(sequelize);

module.exports = {
  sequelize: sequelize,
  user: User,
};
