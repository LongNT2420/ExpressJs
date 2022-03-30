const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController');

// router.use('/',newController.index);

router.get('/:id',siteController.home);
router.get('/',siteController.search);

module.exports = router;
