const { Router } = require("express");
require("dotenv").config();

const router = Router();

const sendContactEmailHandler = require("../Handlers/sendEmails/sendContactEmailHandler");

router.post("/sendContactEmail", sendContactEmailHandler);

module.exports = router;
