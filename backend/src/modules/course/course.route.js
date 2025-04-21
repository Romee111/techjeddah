// const formidableUpload = require('../../../src/middlewares/formidableUpload');
const  couseController = require('../../../src/modules/course/course.controller');
const express = require('express');
const router = express.Router();



router
.route('/addCourse')
.post(

   couseController.addCourse);

router
.route('/getavailableCourse')   
.get(couseController.getavailableCourse);

router
.route('/getCourse/:id')    
.get(couseController.getCourseById);



router
.route('/deleteCourse/:id')
.delete(couseController.deleteCourse);

router
.route('/updateCourse/:id')
.put(couseController.updateCourse);

module.exports = router;