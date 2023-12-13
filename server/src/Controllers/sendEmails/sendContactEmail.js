const mailSend = require("../../NodeMailer/Emails/contactEmail");

const sendEmail = async (req) => {
  try {
    const response = await mailSend(req);
    return response
  } catch (error) {
    return error.message
  }
};

module.exports = sendEmail;
