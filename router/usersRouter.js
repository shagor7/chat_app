//external imports
const express = require("express");
//const { check } = require("express-validator");

//internal imports
const { getUsers, addUser } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const avatarUpload = require("../middlewares/users/avatarUpload");

const { adduserValidators, adduserValidationHandler } = require("../middlewares/users/userValidators");

const router = express.Router();

//login page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// add user
router.post("/",
    avatarUpload,
    adduserValidators,
    adduserValidationHandler,
    addUser);

module.exports = router;