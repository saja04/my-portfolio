const { Router } = require("express");
require("dotenv").config();

const router = Router();

const sendContactEmailHandler = require("../Handlers/sendEmails/sendContactEmailHandler");
const initializer = require("../Handlers/initializer");

router.post("/sendContactEmail", sendContactEmailHandler);
router.get("/", initializer);
// dniu32ndiu32niund23
module.exports = router;
