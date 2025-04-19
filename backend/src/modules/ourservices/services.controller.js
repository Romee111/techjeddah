const Service = require('../../../models/ourservices.model');


const addService = async (req, res) => {
    try {
        const service = await Service.create(req.body);
        res.status(200).json({ service });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getService = async (req, res) => {
    try {   
        const service = await Service.find();
        res.status(200).json({ service });
    } catch (error) {       
        res.status(500).json({ error: error.message });
    }
}

module.exports = { addService, getService };