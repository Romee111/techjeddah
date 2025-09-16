const courseSchema  = require('../../../models/courses.model'); 


// const addCourse = async (req, res) => {
//     try {
//       const {
//         title,
//         description,
//         instructor,
//         duration,
//         level,
//         topics,
//         price,
//         startDate
//       } = req.body;
  
//       // Convert duration to weeks or days (assume weeks here)
//       const parsedDuration = parseInt(duration); // e.g., "10 weeks"
//       const start = new Date(startDate);
//       const now = new Date();
  
//       // Calculate course end date
//       const endDate = new Date(start);
//       endDate.setDate(start.getDate() + parsedDuration * 7); // assuming weeks
  
//       // If course has ended, reset startDate to today
//       const finalStartDate = endDate < now ? now : start;
  
//       const course = await courseSchema.create({
//         title,
//         description,
//         instructor,
//         duration: parsedDuration,
//         level,
//         topics: Array.isArray(topics) ? topics : topics?.split(','),
//         price,
//         startDate: finalStartDate,
//       });
  
//       res.status(200).json({ course });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };
  
const addCourse = async (req, res) => {
    try {
      const {
        title, description, instructor, duration, level,
        topics, price, startDate
      } = req.body;
        const lessons = req.body.lessons;
      const parsedDuration = parseInt(duration);
      const start = new Date(startDate);
      const now = new Date();
      const endDate = new Date(start);
      endDate.setDate(start.getDate() + parsedDuration * 7);
      const finalStartDate = endDate < now ? now : start;
        //  const finallessons=[];
        //  if (Array.isArray(lessons)) {
        //     finallessons.push(...lessons);
        //   } else if (typeof lessons === 'string') {
        //     const parsedLessons = JSON.parse(lessons);
        //     finallessons.push(...parsedLessons);
        //   }
  
      // Add other properties as needed

      const course = await courseSchema.create({
        title,
        description,
        instructor,
        duration: parsedDuration,
        level,
        topics: Array.isArray(topics) ? topics : topics?.split(','),
        price,
        startDate: finalStartDate,
        lessons,
        file: req.uploadedFilePath, // 🔥 file path from middleware
      });
  
      res.status(200).json({ course });
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
        res.status(200).json({ course});
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
        const course = await courseSchema.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{
            new: true
        });
        res.status(200).json({ course });
        }
        catch{
            res.status(500).json({ error: error.message });
        }
}




module.exports = { getavailableCourse, addCourse, deleteCourse, updateCourse, getCourseById, getAllCourse };
