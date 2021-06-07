const files = require('../models/files')




module.exports = async function (req, res, next) {
    if (await files.findOne({ path: req.file.filename })) {
        return res.status(200).json({ note: 'ja tinha no db' })
    }
    else {
        await files.create({
            path: req.file.filename,
            class: req.query.class,
            subject: req.query.subject,
            semester: req.query.semester
        })
        return res.status(200).json({ note: 'enviado' })
    }
}