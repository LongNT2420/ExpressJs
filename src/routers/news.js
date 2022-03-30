const express = require('express')
const router = express.Router()

const newController = require('../app/controllers/NewController');


// router.use('/',newController.index);
router.get('/detail',newController.show);
router.get('/:id',newController.show);
router.get('/',newController.index);
module.exports = router;