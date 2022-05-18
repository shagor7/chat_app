//internal imports
const User = require("../models/people");

//externam imports
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");

//get login page
function getLogin(req, res, next) {
    res.render("index");
}

//do login
async function login(req, res, next) {
    try {
        //find a user who has this email/username
        const user = await User.findOne({
            $or: [{ email: req.body.username }, { mobile: req.body.username }],
        });
        if (user && user._id) {
            const isvalidPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (isvalidPassword) {
                //prepare the user object to generate token
                const userObject = {
                    username: user.name,
                    mobile: user.mobile,
                    email: user.email,
                    role: "user",
                };

                //generate token
                const token = jwt.sign(userObject, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRY,
                });

                //set cookie
                res.cookie(porcess.env.COOKIE_NAME, token, {
                    maxAge: process.env.JWT_EXPIRY,
                    httpOnly: true,
                    signed: true,
                });

                //set logged in user local identifier
                res.locals.loggedInUser = userObject;
                res.render("inbox");
            } else {
                throw createError("Login failed! please try again.");
            }
        } else {
            throw createError("Login failed! please try again.");
        }
    } catch (err) {
        res.render("index", {
            errors: {
                common: {
                    msg: err.message,
                },
            },
        });
    }
}

module.exports = {
    getLogin,
    login,
};