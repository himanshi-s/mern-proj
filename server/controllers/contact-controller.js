const Contact = require('../models/contact-model')

const ContactController = async (req,res,next) => {
  try {
    const {username,email,message} = req.body;
    const contactUser = await Contact.create({
        username,
        email,
        message
    });
    return res.status(200).json({contactUser});

  } catch (error) {
    next({status: 400,message: error.message})
  }
}

module.exports = ContactController;