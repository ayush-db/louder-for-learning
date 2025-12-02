const { Pool } = require('pg');
require('dotenv').config();


let poolConfig;
if (process.env.DATABASE_URL) {
    poolConfig = {
        connectionString: process.env.DATABASE_URL,
        ssl:
            process.env.DATABASE_URL.includes('neon.tech')
                ? { rejectUnauthorized: false }
                : undefined
    };
} else {
    poolConfig = {
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'louder_for_learning',
    password: process.env.DB_PASSWORD || 'your_db_password',
    port: process.env.DB_PORT || 5432,
    ssl : process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false
    };
}
const pool = new Pool(poolConfig);
pool.connect()
    .then(() =>{ console.log('Connected to the database successfully');
    if (process.env.DATABASE_URL) {
        console.log('Using remote database');
    } else {
        console.log('Using local database');
    }})
    .catch(err =>{ console.error('Database connection error', err.message);
        console.error("Stack", err.stack);
    });
module.exports = pool;