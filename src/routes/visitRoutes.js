const express = require('express');
const visitController = require('../controllers/visitController');

const router = express.Router();

router.get('/', visitController.getVisits);
router.post('/', visitController.createVisit);

module.exports = router;
