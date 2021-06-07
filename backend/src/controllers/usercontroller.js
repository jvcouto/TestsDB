const users = require('../models/users')
const bcrypt = require('bcryptjs')
const yup = require('yup')

module.exports = {
    async register(req, res) {

        try {


            const schema = yup.object().shape({
                name: yup.string().required(),
                email: yup.string().required(),
                password: yup.string().required().min(8)
            })

            if (!(await schema.isValid(req.body))) {
                return res.status(400).json({ error: 'Validation failed' })
            }




            const { email } = req.body
            if (await users.findOne({ email })) {
                return res.status(400).json({ error: 'User already registed' })
            }
            const newuser = await users.create(req.body)
            return res.json(newuser)
        }
        catch (err) {
            console.error(err)
        }
    },




    async update(req, res) {
        try {


            const schema = yup.object().shape({
                email: yup.string().required(),
                oldpassword: yup.string().min(8).required(),
                password: yup.string().min(8),
                confirmpassword: yup.string().when('password', (password, field) =>
                    password ? field.required().oneOf([yup.ref('password')]) : field
                )
            })

            if (!(await schema.isValid(req.body))) {
                return res.status(400).json({ error: 'Validation failed' })
            }



            const { email, oldpassword } = req.body
            const user = await users.findById(req.userid)
            if (email != user.email) {
                if (await users.findOne({ email })) {
                    return res.status(400).json({ error: 'Email already registed' })
                }
            }
            if (oldpassword && !(await bcrypt.compare(oldpassword, user.password))) {
                return res.status(400).json({ error: 'Password does not match' })
            }
            if (!oldpassword) {
                return res.status(400).json({ error: 'enter old password' })
            }
            await user.updateOne(req.body)
            return res.status(200).json({ ok: 'ok' })
        }
        catch (err) {
            console.error(err)
        }
    }
}