const jwt = require('jsonwebtoken')
const authconfig = require('../config/auth')
const { promisify } = require('util')

module.exports = async (req, res, next) => {
    const authheader = req.headers.authorization

    if (!authheader) {
        return res.status(401).json({ error: 'Token not provided' })
    }
    const [, token] = authheader.split(' ')
    try {
        const decoded = await promisify(jwt.verify)(token, authconfig.secret)
        req.userid = decoded.id
        return next()
    } catch (err) {
        return res.status(401).json({ error: 'Token Invalid' })
    }
}