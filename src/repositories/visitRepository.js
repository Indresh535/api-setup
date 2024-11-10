const clickhouse = require('../utils/clickhouseClient');

const getVisits = async () => {
    const query = 'SELECT * FROM visits LIMIT 10';
    const { data } = await clickhouse.query({ query, format: 'JSONEachRow' }).toPromise();
    return data;
};

const insertVisit = async (visit) => {
    const { user_id, visit_date, page_views, session_duration } = visit;
    await clickhouse.insert({
        table: 'visits',
        values: [{ user_id, visit_date, page_views, session_duration }],
        format: 'JSONEachRow',
    }).toPromise();
};

module.exports = { getVisits, insertVisit };
