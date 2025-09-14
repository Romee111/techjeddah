const express = require('express');
const  connectDB=require('./db/dbConnections');
const cors=require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');

const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(fileUpload());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const applyRoute = require('../backend/src/modules/apply/apply.route');
const courseRoute = require('../backend/src/modules/course/course.route');
const contactRoute = require('../backend/src/modules/contact/contact.route');
const ourServiceRoute = require('../backend/src/modules/ourservices/services.route');
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/apply', applyRoute);
app.use('/course', courseRoute )
app.use('/contact', contactRoute)
app.use('/service', ourServiceRoute)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
    console.log('Example app listening on port,', process.env.PORT);
});

module.exports = app;