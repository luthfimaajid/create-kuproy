const mongoose = require('mongoose')

const User = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	email: String
});

module.exports = User;