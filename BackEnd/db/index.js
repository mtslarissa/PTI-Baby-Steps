const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'db.yypsfbasmoxdqinulmhw.supabase.co',
    database: 'postgres',
    password: 'babysteps',
    port: '5432'
});

module.exports = {
    query: (text, params) => pool.query(text, params)
};