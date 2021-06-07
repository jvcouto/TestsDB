const users = require('../models/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const authconfig = require('../config/auth')
const yup = require('yup')



module.exports = {
    async createsession(req, res) {

        try {
            const schema = yup.object().shape({
                email: yup.string().required(),
                password: yup.string().required()
            })

            if (!(await schema.isValid(req.body))) {
                return res.status(400).json({ error: 'Validation failed' })
            }





            const { email, password } = req.body
            const user = await users.findOne({ email })
            if (!user) {
                return res.status(401).json({ error: 'User not found' })
            }
            if (!(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({ erros: 'Wrong Password' })
            }

            const { id, name } = user
            return res.json({
                user: {
                    id,
                    name,
                    email,
                },
                token: jwt.sign({ id }, authconfig.secret, {
                    expiresIn: authconfig.expiretime,
                }),
            })
        }
        catch (err) {
            console.error(err)
        }
    }
}