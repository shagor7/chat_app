const mongoose = require("mongoose");

<<<<<<< HEAD
const peopleSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        mobile: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
        },
        role: {
            type: String,
            enum: ["admin", "user"],
            default: "user",
        },
    },
=======
const peopleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    password: {
        true: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
},
>>>>>>> d7d1bbb8a11cecb9fa831c1a61d1289e3b2590bc
    {
        timestamps: true,
    }
);
<<<<<<< HEAD

=======
>>>>>>> d7d1bbb8a11cecb9fa831c1a61d1289e3b2590bc
const People = mongoose.model("People", peopleSchema);

module.exports = People;