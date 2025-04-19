const apply = require('../../../models/apply.model');


const applyCourse = async (req, res) => {
    try {
        const course = await apply.create(req.body);
        res.status(201).json({ course });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCourse = async (req, res) => {
    try {
        const course = await apply.find();
        res.status(200).json({ course });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCourse = async (req, res) => {
    try {    
        const course = await apply.findByIdAndUpdate(req.params.id, req.body, { new: true });    
        res.status(200).json({ course });    
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
}

const deleteCourse = async (req, res) => {
    try {
        const course = await apply.findByIdAndDelete(req.params.id);
        res.status(200).json({ course });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }       
}
module.exports = { applyCourse, getCourse, updateCourse, deleteCourse };   