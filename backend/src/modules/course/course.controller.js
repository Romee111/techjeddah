const path = require('path');
const courseSchema = require('../../../models/courses.model');

const parseArrayValue = (value) => {
  if (Array.isArray(value)) return value;
  if (typeof value === 'string' && value.trim().length) {
    try {
      return JSON.parse(value);
    } catch {
      return value.split(',').map((item) => item.trim()).filter(Boolean);
    }
  }
  return [];
};

const saveUploadedFile = async (req) => {
  if (!req.files || !req.files.file) return null;

  const file = req.files.file;
  const fileName = `${Date.now()}-${file.name}`;
  const uploadPath = path.join(__dirname, '..', '..', '..', 'uploads', fileName);

  await file.mv(uploadPath);
  return `/uploads/${fileName}`;
};

const addCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      instructor,
      duration,
      level,
      topics,
      price,
      startDate,
    } = req.body;

    const lessons = parseArrayValue(req.body.lessons);
    const parsedDuration = Number.parseInt(duration, 10);
    const start = startDate ? new Date(startDate) : new Date();
    const now = new Date();
    const endDate = new Date(start);
    endDate.setDate(start.getDate() + (Number.isNaN(parsedDuration) ? 0 : parsedDuration) * 7);
    const finalStartDate = endDate < now ? now : start;
    const fileUrl = await saveUploadedFile(req);

    const course = await courseSchema.create({
      title,
      description,
      instructor,
      duration: Number.isNaN(parsedDuration) ? duration : parsedDuration,
      level,
      topics: parseArrayValue(topics),
      price,
      startDate: finalStartDate,
      lessons,
      file: fileUrl,
    });

    res.status(201).json({ course });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllCourse = async (req, res) => {
  try {
    const allcourse = await courseSchema.find();
    res.status(200).json({ allcourse });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

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
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.status(200).json({ course });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const course = await courseSchema.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.status(200).json({ course });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    const updates = { ...req.body };
    if (req.body.topics) updates.topics = parseArrayValue(req.body.topics);
    if (req.body.lessons) updates.lessons = parseArrayValue(req.body.lessons);

    const course = await courseSchema.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.status(200).json({ course });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getavailableCourse,
  addCourse,
  deleteCourse,
  updateCourse,
  getCourseById,
  getAllCourse,
};
