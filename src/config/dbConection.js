const { Sequelize } = require("sequelize");

const { POSTGRES_URL } = process.env;

const sequelize = new Sequelize(POSTGRES_URL);

const connectToPostgres = async () => {
  try {

    await sequelize.authenticate();

    console.log("🗃  Connection has been established successfully 🗃");
  } catch (error) {
    console.error("💥 Unable to connect to the database:", error);
  }
};

module.exports = { connectToPostgres, sequelize };
