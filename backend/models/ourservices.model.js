const mongoose = require('mongoose');
const servicesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    liveUrl: { type: String },
    githubUrl: { type: String },
    imageUrl: { type: String },
    agenda: [{ time: String, activity: String }],
    maxAttendees: { type: Number },
    currentAttendees: { type: Number, default: 0 }
  }, { timestamps: true });
  
   const Service = mongoose.model('Meeting', servicesSchema);
  
   module.exports = Service;
  