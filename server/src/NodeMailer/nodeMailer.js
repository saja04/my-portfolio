require("dotenv").config();

const nodemailer = require("nodemailer");

const { NODEMAILER_EMAIL, NODEMAILER_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: NODEMAILER_EMAIL,
    pass: NODEMAILER_PASSWORD,
  },
});

transporter.verify().then(() => {
  console.log("Nodemailer ready to send emails");
});

module.exports = transporter;
