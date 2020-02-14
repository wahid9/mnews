const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    articles: [{type: mongoose.Schema.Types.ObjectId, ref: 'articles'}],
    username: String,
    email: String,
    password: String,
    token: String,
    salt: String, 
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel