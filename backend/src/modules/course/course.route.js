const courseController = require('./course.controller');
const express = require('express');
const router = express.Router();

router.route('/addCourse').post(courseController.addCourse);
router.route('/getAllCourses').get(courseController.getAllCourse);
router.route('/getavailableCourse').get(courseController.getavailableCourse);
router.route('/getCourse/:id').get(courseController.getCourseById);
router.route('/updateCourse/:id').put(courseController.updateCourse);
router.route('/deleteCourse/:id').delete(courseController.deleteCourse);

module.exports = router;