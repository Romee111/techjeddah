const Contact = require('../../../models/contact.model');
const nodemailer = require('nodemailer');

const getContact = async (req, res) => {
    try {
        const contact = await Contact.find();
        res.status(200).json({ contact });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};  

// const addContact = async (req, res) => {    
//     try {        
//         const contact = await Contact.create(req.body);        
//         res.status(200).json({ contact });        
//     } catch (error) {
//         res.status(500).json({ error: error.message }); 
//     }
// }



// Add a new contact message
const addContact = async (req, res) => {
  try {
    // 1. Save contact data in MongoDB
    const contact = await Contact.create(req.body);

    // 2. Configure Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,     // your Gmail
        pass: process.env.EMAIL_PASS          // Gmail App Password
      },
    });

    // 3. Email to Admin (you)
    let adminMailOptions = {
      from: contact.email,
      to: 'yourEmail@gmail.com', // where you receive contact messages
      subject: `📩 New Contact Message from ${contact.name}`,
      text: `
You received a new message:

Name: ${contact.name}
Email: ${contact.email}
Contact No: ${contact.contactNo || 'N/A'}
Subject: ${contact.subject || 'No subject'}
Message: ${contact.message}

Submitted at: ${contact.createdAt}
      `
    };

    await transporter.sendMail(adminMailOptions);

    // 4. Auto-reply email to the user
    let userMailOptions = {
      from: 'yourEmail@gmail.com',
      to: contact.email,
      subject: '✅ We received your message',
      text: `
Hello ${contact.name},

Thank you for reaching out to us. 
We have received your message and will get back to you soon.

Your Message:
"${contact.message}"

Best Regards,
Your Company Team
      `
    };

    await transporter.sendMail(userMailOptions);

    // 5. Send success response
    res.status(200).json({
      message: 'Contact saved and emails sent successfully!',
      contact
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong', details: error.message });
  }
};

module.exports = { getContact, addContact };