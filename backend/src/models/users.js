const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Userschema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

Userschema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next()
        }
        this.password = await bcrypt.hash(this.password, 8)
    }
    catch (err) {
        console.error(err)
    }
})

Userschema.pre('updateOne', async function (next) {
    try {
        newpassword = this.getUpdate().password
        if (!newpassword) {
            return next()
        }
        this.getUpdate().password = await bcrypt.hash(newpassword, 8)
    }
    catch (err) {
        console.error(err)
    }
})

module.exports = mongoose.model('user', Userschema)