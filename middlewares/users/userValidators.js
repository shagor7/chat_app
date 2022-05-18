<<<<<<< HEAD
// external imports
=======
>>>>>>> d7d1bbb8a11cecb9fa831c1a61d1289e3b2590bc
const { check, validationResult } = require("express-validator");
const createError = require("http-errors");
const path = require("path");
const { unlink } = require("fs");

<<<<<<< HEAD
// internal imports
const User = require("../../models/People");

// add user
const addUserValidators = [
    check("name")
        .isLength({ min: 1 })
        .withMessage("Name is required")
        .isAlpha("en-US", { ignore: " -" })
        .withMessage("Name must not contain anything other than alphabet")
        .trim(),
    check("email")
        .isEmail()
        .withMessage("Invalid email address")
        .trim()
        .custom(async (value) => {
            try {
                const user = await User.findOne({ email: value });
                if (user) {
                    throw createError("Email already is use!");
=======
//add user
const adduserValidators = [
    check("name")
        .isLength({ min: 1 })
        .withMessage("name is required")
        .isAlpha("en-US", { ignore: " -" })
        .withMessage(" Name must not contain anything other than alphabet")
        .trim(),
    check("email")
        .isEmail()
        .withMessage("invalid email address")
        .trim()
        .custom(async (value) => {
            try {
                const user = await user.findOne({ email: value });
                if (user) {
                    throw createError("Email already in use!");
>>>>>>> d7d1bbb8a11cecb9fa831c1a61d1289e3b2590bc
                }
            } catch (err) {
                throw createError(err.message);
            }
        }),
    check("mobile")
        .isMobilePhone("bn-BD", {
            strictMode: true,
        })
        .withMessage("Mobile number must be a valid Bangladeshi mobile number")
        .custom(async (value) => {
            try {
<<<<<<< HEAD
                const user = await User.findOne({ mobile: value });
                if (user) {
                    throw createError("Mobile already is use!");
=======
                const user = await user.findOne({ mobile: value });
                if (user) {
                    throw createError(" mobile number already in use!");
>>>>>>> d7d1bbb8a11cecb9fa831c1a61d1289e3b2590bc
                }
            } catch (err) {
                throw createError(err.message);
            }
        }),
    check("password")
        .isStrongPassword()
        .withMessage(
<<<<<<< HEAD
            "Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol"
        ),
];

const addUserValidationHandler = function (req, res, next) {
=======
            "Password must be atleast 8 charecter's long $ should contain atleast 1 lowercase, 1 uppercase, 1 number and 1 symbol"
        ),
];

const adduserValidationHandler = function (req, res, next) {
>>>>>>> d7d1bbb8a11cecb9fa831c1a61d1289e3b2590bc
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();
    if (Object.keys(mappedErrors).length === 0) {
        next();
    } else {
<<<<<<< HEAD
        // remove uploaded files
        if (req.files.length > 0) {
            const { filename } = req.files[0];
            unlink(
                path.join(__dirname, `/../public/uploads/avatars/${filename}`),
=======
        //remove uploader files
        if (req.files.length > 0) {
            const { filename } = req.files[0];
            unlink(
                path.join(__dirname, `/../public/uploads/avatar/${filename}`),
>>>>>>> d7d1bbb8a11cecb9fa831c1a61d1289e3b2590bc
                (err) => {
                    if (err) console.log(err);
                }
            );
        }
<<<<<<< HEAD

        // response the errors
=======
>>>>>>> d7d1bbb8a11cecb9fa831c1a61d1289e3b2590bc
        res.status(500).json({
            errors: mappedErrors,
        });
    }
};

module.exports = {
<<<<<<< HEAD
    addUserValidators,
    addUserValidationHandler,
};
=======
    adduserValidators,
    adduserValidationHandler,
}
>>>>>>> d7d1bbb8a11cecb9fa831c1a61d1289e3b2590bc
