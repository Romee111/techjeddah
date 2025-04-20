const multer = require('multer');
const path = require('path');

// Specify storage configuration (e.g., store files in a "uploads" folder)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Set up Multer to handle single file upload for 'imageUrl'
const uploadSingle = multer({ storage: storage }).single('imageUrl'); // 'imageUrl' is the field name

module.exports = { uploadSingle };
