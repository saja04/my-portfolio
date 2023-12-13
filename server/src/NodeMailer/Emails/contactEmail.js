const transporter = require("../nodeMailer");

const { NODEMAILER_EMAIL } = process.env;

const mailSend = async ({ userEmail, userName, subject, message }) => {
  try {
    await transporter.sendMail({
      from: NODEMAILER_EMAIL,
      to: "saajamilf@gmail.com",
      subject: `${userName} te envio un mensaje a traves del portfolio!`,
      html: `
            <h1>${userName} --- ${userEmail} envio el siguiente mensaje!</h1>
            <br/>
            <br/>
            <h2>ASUNTO: ${subject}</h2>
            <br/>
            <h3>MENSAJE: ${message}</h3>
            <br/>
            `,
    });
    return 'email sent correctly'
  } catch (error) {
    return error.message;
  }
};

module.exports = mailSend;
