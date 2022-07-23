import {SequelizeOptions} from "sequelize-typescript";
import dotenv from 'dotenv';
dotenv.config();

const host = process.env.DB_HOST || 'localhost';
const username = process.env.DB_USERNAME || 'ivy';
const password = process.env.DB_PASSWORD || 'GOODDAY';
const database = process.env.DB_DATABASE || 'board';

interface Ioptions {
    development: SequelizeOptions,
    production: SequelizeOptions
}

const options: Ioptions = {
    development: {
        host,
        username,
        password,
        database,
        dialect: 'mysql'
    },
    production:{
        host,
        username,
        password,
        database,
        dialect: 'mysql'
    }
}

export default options;