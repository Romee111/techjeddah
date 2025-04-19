const   applyController = require('../../../src/modules/apply/apply.controller');
const express = require('express');
const router = express.Router();

router
.route('/applyCourse')
.post(applyController.applyCourse);

router
.route('/getCourse')    
.get(applyController.getCourse);

router
.route('/updateCourse/:id') 
.put(applyController.updateCourse);

router
.route('/deleteCourse/:id') 
.delete(applyController.deleteCourse);

module.exports = router;