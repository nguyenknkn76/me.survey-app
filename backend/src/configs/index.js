const path = require('path');

const config = {
  path: {
    root: path.resolve(__dirname, '..')
  },
  app: {
    port: process.env.BACKEND_PORT
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  smtp: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE, // true or false
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
    name: process.env.SMTP_NAME,
  }, 
  nextcloud: {
    url: process.env.NEXTCLOUD_URL,
    username: process.env.NEXTCLOUD_USER,
    password: process.env.NEXTCLOUD_PASSWORD,
  }
};

module.exports = config;