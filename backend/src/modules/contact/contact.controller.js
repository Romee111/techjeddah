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
    const contact = await Contact.create(req.body);

    const canSendEmail =
      process.env.EMAIL_USER &&
      process.env.EMAIL_PASS &&
      process.env.EMAIL_ADMIN &&
      process.env.EMAIL_FROM;

    if (canSendEmail) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const adminMailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_ADMIN,
        subject: `📩 New Contact Message from ${contact.name}`,
        text: `You received a new message:\n\nName: ${contact.name}\nEmail: ${contact.email}\nContact No: ${contact.contactNo || 'N/A'}\nSubject: ${contact.subject || 'No subject'}\nMessage: ${contact.message}\n\nSubmitted at: ${contact.createdAt}`,
      };

      await transporter.sendMail(adminMailOptions);

      const userMailOptions = {
        from: process.env.EMAIL_FROM,
        to: contact.email,
        subject: '✅ We received your message',
        text: `Hello ${contact.name},\n\nThank you for reaching out to us. We have received your message and will get back to you soon.\n\nYour Message:\n"${contact.message}"\n\nBest Regards,\nTechJeddah Team`,
      };

      await transporter.sendMail(userMailOptions);
    }

    res.status(201).json({
      message: canSendEmail
        ? 'Contact saved and email notifications sent successfully.'
        : 'Contact saved. Email delivery was skipped because SMTP credentials are not configured.',
      contact,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong', details: error.message });
  }
};

module.exports = { getContact, addContact };