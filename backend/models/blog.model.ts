const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
    date: { type: Date, required: true }
}, { timestamps: true });

const Blogs = mongoose.model('Blog', blogSchema);

module.exports = Blogs;