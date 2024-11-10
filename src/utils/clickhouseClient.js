const { createClient } = require('@clickhouse/client');
const { CLICKHOUSE_HOST } = require('../config/config');

const clickhouse = createClient({
    host: CLICKHOUSE_HOST,
    username: 'default',
    password: '',
    database: 'analytics',
});

module.exports = clickhouse;
