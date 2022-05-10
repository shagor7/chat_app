const { check, validationResult } = require("express-validator");
const createError = require("http-errors");
const path = require("path");
const { unlink } = require("fs");

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
                const user = await user.findOne({ mobile: value });
                if (user) {
                    throw createError(" mobile number already in use!");
                }
            } catch (err) {
                throw createError(err.message);
            }
        }),
    check("password")
        .isStrongPassword()
        .withMessage(
            "Password must be atleast 8 charecter's long $ should contain atleast 1 lowercase, 1 uppercase, 1 number and 1 symbol"
        ),
];

const adduserValidationHandler = function (req, res, next) {
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();
    if (Object.keys(mappedErrors).length === 0) {
        next();
    } else {
        //remove uploader files
        if (req.files.length > 0) {
            const { filename } = req.files[0];
            unlink(
                path.join(__dirname, `/../public/uploads/avatar/${filename}`),
                (err) => {
                    if (err) console.log(err);
                }
            );
        }
        res.status(500).json({
            errors: mappedErrors,
        });
    }
};

module.exports = {
    adduserValidators,
    adduserValidationHandler,
}