const Contact = require('../../../models/contact.model');

const getContact = async (req, res) => {
    try {
        const contact = await Contact.find();
        res.status(200).json({ contact });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};  

const addContact = async (req, res) => {    
    try {        
        const contact = await Contact.create(req.body);        
        res.status(200).json({ contact });        
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
}

module.exports = { getContact, addContact };