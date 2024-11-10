require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3000,
    CLICKHOUSE_HOST: process.env.CLICKHOUSE_HOST || 'http://localhost:8123',
};
