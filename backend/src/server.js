const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')




const app = express()

mongoose.connect('******', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})



mongoose.set('useCreateIndex', true)



app.use(express.json())
app.use(routes)
app.listen(3333)
