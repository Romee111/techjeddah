const  servicesController = require('../../../src/modules/ourservices/services.controller');
const express = require('express');
const router = express.Router();
// const fileUploadMiddleware = require('../../middlewares/fileUpload');
router
.route('/addService')
.post(

    servicesController.addService);

router
.route('/getService')
.get(servicesController.getService);

module.exports = router;