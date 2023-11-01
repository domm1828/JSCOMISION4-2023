const multer = require('multer');

const uploadSingle = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, "public/images/")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + "-" + file.originalname)
    }

});

const filterValidate = (req, file, cb) => {
 
    if (file.mimetype.includes("image/png") ||
        file.mimetype.includes("image/jpeg")) {
        cb(null, true);
    }
    else {
         cb(new Error('No se puede subir este tipo de archivo: '+file.mimetype),false)
    }

}

const uploadStorage = multer({ storage: uploadSingle,fileFilter:filterValidate});

module.exports = uploadStorage;
