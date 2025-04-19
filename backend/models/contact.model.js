const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String },
    message: { type: String, required: true },
    isResolved: { type: Boolean, default: false }
  }, { timestamps: true });
  
  export const Contact = mongoose.model('Contact', contactSchema);