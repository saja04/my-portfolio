const sendContactEmail = require("../../Controllers/sendEmails/sendContactEmail");

const sendContactEmailHandler = async (req, res) => {
  try {
    const { userName, userEmail, subject, message } = req.body;
    if (!userName || !userEmail || !message)
      // checks if all variables neccesary are in the body of the request
      return res
        .status(401)
        .send(
          "missing information, please check variable names and/or requirements!"
        );
    const check = /^[^\s@]{1,100}@[^\s@]{1,50}\.[^\s@]{1,20}$/.test(userEmail); // checks if user email could exist and maximizes length
    if (!check) return res.status(401).send("invalid email!");
    if (userName.length > 100) return res.status(401).send("name is too long!"); //maximizes length
    if (subject.length > 150)
      return res.status(401).send("subject is too long!"); //maximizes length
    if (message.length > 1000)
      return res.status(401).send("message is too long!"); //maximizes length
    const response = await sendContactEmail(req.body);
    console.log(response);
    if (response === "email sent correctly")
      return res.status(200).send(response);
    else
      return res
        .status(402)
        .send("email was not sent, please check nodemailer config");
  } catch (error) {
    return res.status(402).send(error.message);
  }
};
module.exports = sendContactEmailHandler;
