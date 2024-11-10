const visitRepository = require('../repositories/visitRepository');

const getVisits = async () => {
    return await visitRepository.getVisits();
};

const createVisit = async (visitData) => {
    await visitRepository.insertVisit(visitData);
};

module.exports = { getVisits, createVisit };
