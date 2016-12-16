var express = require('express');
var router = express.Router();
var ctrlShowData = require('../controllers/tvshow');

/* GET home page. */
router.get('/tvshowData/:City', ctrlShowData.showDataReadOne);
router.get('/tvshowData', ctrlShowData.showDataReadAll);

module.exports = router;
