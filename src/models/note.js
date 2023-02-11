const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
	title: {
		type: String,
		required: false
	},
	location: {
		type: String,
		required: false
	},
	description: {
		type: String,
		required: false
	},
  created_at: {
    type: Date,
    required: false,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    required: false
  }
});

module.exports = mongoose.model("Note", noteSchema); 
