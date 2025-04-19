const mongoose = require('mongoose');
const applySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    interest: { type: String, required: true },
    message: { type: String },
    status: { type: String, default: 'pending', enum: ['pending', 'reviewing', 'accepted', 'rejected'] 
      }
  }, { timestamps: true });

const apply =mongoose.model('Apply', applySchema);

module.exports = apply;  
