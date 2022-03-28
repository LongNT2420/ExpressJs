const express = require('express')
const router = express.Router()

const newController = require('../app/controllers/NewController');


// router.use('/',newController.index);
router.use('/news/:id',newController.show);
router.use('/',newController.index);
module.exports = router;