module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "shelter_db_dev",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "tbd",
    password: process.env.DB_PASSWORD,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  apiKey: {
    gov: process.env.API_KEY_GOV,
  },
  secret: {
    shelter: process.env.SVS,
  },
};
