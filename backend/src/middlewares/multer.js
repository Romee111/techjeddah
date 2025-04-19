const multer = require('multer');
const path = require('path');
// Set up storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      const uploadPath = process.env.UPLOAD_PATH;
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // generating a unique filename
  }
});

// Set up multer with storage and a simple file type check
const uploads = multer({
  storage,
  fileFilter: (req, file, cb) => {
    // Allow only image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true); // Accept the file
    } else {
      cb(new Error('Only image files are allowed!'), false); // Reject the file
    }
  }
});

// Export the upload middleware to use in routes
module.exports = uploads;
