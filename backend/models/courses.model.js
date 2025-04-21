const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    title: { type: String,  },
    description: { type: String,  },
    instructor: { type: String, },
    duration: { type: String },
    level: { type: String },
    topics: [String],
    imageUrl: [String],
    price: { type: Number },
    startDate: { type: Date }
  }, { timestamps: true });
  
  const Course = mongoose.model('Course', courseSchema);
  
  module.exports = Course;