const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ehojune:123321@cluster0.dj5wx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected. . .'))
.catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`example app listening on port ${port}!`))