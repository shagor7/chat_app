<<<<<<< HEAD
// external imports
const multer = require("multer");
const path = require("path");
const createError = require("http-errors");
=======
const createError = require('http-errors');
const multer = require('multer')
const path = require("path");
>>>>>>> d7d1bbb8a11cecb9fa831c1a61d1289e3b2590bc

function uploader(
    subfolder_path,
    allowed_file_types,
    max_file_size,
    error_msg
) {
<<<<<<< HEAD
    // File upload folder
    const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subfolder_path}/`;

    // define the storage
=======
    //file upload folder
    const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subfolder_path}`;

>>>>>>> d7d1bbb8a11cecb9fa831c1a61d1289e3b2590bc
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, UPLOADS_FOLDER);
        },
        filename: (req, file, cb) => {
            const fileExt = path.extname(file.originalname);
            const fileName =
                file.originalname
                    .replace(fileExt, "")
                    .toLowerCase()
                    .split(" ")
<<<<<<< HEAD
                    .join("-") +
                "-" +
                Date.now();

            cb(null, fileName + fileExt);
        },
    });

    // preapre the final multer upload object
=======
                    .join("-") + "-" + Date.now();

            cb(null, fileName + fileExt)
        },
    });

>>>>>>> d7d1bbb8a11cecb9fa831c1a61d1289e3b2590bc
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: max_file_size,
        },
        fileFilter: (req, file, cb) => {
            if (allowed_file_types.includes(file.mimetype)) {
                cb(null, true);
            } else {
                cb(createError(error_msg));
            }
        },
    });
<<<<<<< HEAD

=======
    //make upload object
>>>>>>> d7d1bbb8a11cecb9fa831c1a61d1289e3b2590bc
    return upload;
}

module.exports = uploader;