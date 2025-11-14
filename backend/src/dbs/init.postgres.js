'use strict'

const { Sequelize } = require('sequelize');
const { db: { host, name, password, port, user } } = require('../configs/'); 

const connectString = `postgres://${user}:${password}@${host}:${port}/${name}`;

console.log(`connection string:::::`,connectString);

const sequelizeInstance = new Sequelize(connectString, {
    dialect: 'postgres',
    // logging: console.log, 
    logging: false,
    pool: {
        max: 50,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

class Database {
    constructor() {
        this.sequelize = sequelizeInstance;
    }

    async authenticate() {
        try {
            await this.sequelize.authenticate();
            console.log(`Connect PostgresSQL success`);
        } catch (error) {
            console.error(`Error connecting to Postgres:::::`, error.message)
        }
    }

    getSequelizeInstance() {
        return this.sequelize;
    }

    static getInstance() {
        if (!Database.instance) Database.instance = new Database();
        return Database.instance;
    }
}

const instancePostgres = Database.getInstance();

module.exports = instancePostgres;