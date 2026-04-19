const express = require('express');
const connectDB = require('./db/dbConnections');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');

require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    createParentPath: true,
    safeFileNames: true,
    preserveExtension: true,
  })
);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const applyRoute = require('./src/modules/apply/apply.route');
const courseRoute = require('./src/modules/course/course.route');
const contactRoute = require('./src/modules/contact/contact.route');
const ourServiceRoute = require('./src/modules/ourservices/services.route');

connectDB();

app.use('/apply', applyRoute);
app.use('/course', courseRoute);
app.use('/contact', contactRoute);
app.use('/service', ourServiceRoute);

app.get('/', (req, res) => {
  res.send('TechJeddah API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;