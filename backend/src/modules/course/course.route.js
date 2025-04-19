// const uploads = require('../../middlewares/multer.js');
const  couseController = require('../../../src/modules/course/course.controller');
const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


router
.route('/addCourse')
.post(
  upload.single('imageUrl'), couseController.addCourse);

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