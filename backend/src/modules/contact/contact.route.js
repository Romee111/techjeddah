const contactController = require('./contact.controller');
const express = require('express');
const router = express.Router();

router.route('/addContact').post(contactController.addContact);
router.route('/getContacts').get(contactController.getContact);

module.exports = router;    