const courseSchema  = require('../../../models/courses.model'); 
//  const asyncHandler = require('express-async-handler');

const getavailableCourse = async (req, res) => {
    try {
        const course = await courseSchema.find({ startDate: { $gte: new Date() } });
        res.status(200).json({ course });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCourseById = async (req, res) => {
    try {
        const course = await courseSchema.findById(req.params.id);
        res.status(200).json({ course });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addCourse = async (req, res) => {
    try {
      const { title, description, instructor, duration, level, topics, price, startDate } = req.body;
  
 
  
      const course = await courseSchema.create({
        title,
        description,
        instructor,
        duration,
        level,
        topics: Array.isArray(topics) ? topics : topics?.split(','),
        price,
        startDate,
        imageUrl,
      });
  
      res.status(200).json({ course });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

const deleteCourse = async (req, res) => {
    try {
        const course = await courseSchema.findByIdAndDelete(req.params.id);
        res.status(200).json({ course });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }       
}

const updateCourse = async (req, res) => {
    try {    
        const course = await courseSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });    
        res.status(200).json({ course });    
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
}

module.exports = { getavailableCourse, addCourse, deleteCourse, updateCourse, getCourseById };
