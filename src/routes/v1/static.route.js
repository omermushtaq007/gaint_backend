const router = require('express').Router();
const { staticController } = require('../../controllers');

router.get('/', staticController.staticData);

module.exports = router;
