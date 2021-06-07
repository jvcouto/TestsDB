const multer = require('multer')
const { extname, resolve } = require('path')
const crypto = require('crypto')


module.exports = {
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'tests'),
        filename: (req, file, cb) => {
            const finalname = req.query.class + req.query.subject + req.query.semester + extname(file.originalname)
            return cb(null, finalname)
        }
    })
}