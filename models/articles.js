const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
	title: String,
	image: String,
	description: String
     
})

const articleModel = mongoose.model('articles', articleSchema)

module.exports = articleModel