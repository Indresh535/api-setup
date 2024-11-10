const visitService = require('../services/visitService');

const getVisits = async (req, res) => {
    try {
        const visits = await visitService.getVisits();
        res.json(visits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createVisit = async (req, res) => {
    try {
        const visitData = req.body;
        await visitService.createVisit(visitData);
        res.status(201).json({ message: 'Visit created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getVisits, createVisit };
