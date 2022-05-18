// external imports
const express = require("express");
<<<<<<< HEAD
const { check } = require("express-validator");

// internal imports
const {
    getUsers,
    addUser,
    removeUser,
} = require("../controller/usersController");
=======
//const { check } = require("express-validator");

//internal imports
const { getUsers, addUser } = require("../controller/usersController");
>>>>>>> d7d1bbb8a11cecb9fa831c1a61d1289e3b2590bc
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
    addUserValidators,
    addUserValidationHandler,
} = require("../middlewares/users/userValidators");

const avatarUpload = require("../middlewares/users/avatarUpload");

const { adduserValidators, adduserValidationHandler } = require("../middlewares/users/userValidators");

const router = express.Router();

// users page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// add user
<<<<<<< HEAD
router.post(
    "/",
    avatarUpload,
    addUserValidators,
    addUserValidationHandler,
    addUser
);

// remove user
router.delete("/:id", removeUser);

module.exports = router
=======
router.post("/",
    avatarUpload,
    adduserValidators,
    adduserValidationHandler,
    addUser);

module.exports = router;
>>>>>>> d7d1bbb8a11cecb9fa831c1a61d1289e3b2590bc
