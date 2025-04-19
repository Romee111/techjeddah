const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: String, required: true },
    duration: { type: String },
    level: { type: String },
    topics: [String],
    imageUrl: { type: String },
    price: { type: Number },
    startDate: { type: Date }
  }, { timestamps: true });
  
  const Course = mongoose.model('Course', courseSchema);
  
  module.exports = Course;