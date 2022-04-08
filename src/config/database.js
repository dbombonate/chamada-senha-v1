require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  host: process.env.HOST_DB,
  password: process.env.PASS_DB,
  username: process.env.USER_DB,
  port: process.env.PORT_DB,
  database: process.env.NAME_DB,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
};
