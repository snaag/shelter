module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "shelter_db_dev",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "shelter_db_prod",
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
  apiKey: {
    gov: process.env.API_KEY_GOV,
  },
  secret: {
    shelter: process.env.SVS,
  },
};
