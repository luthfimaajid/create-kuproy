const mongoose = require("mongoose");

const siteSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: false,
		},
		description: {
			type: String,
			required: false,
		},
		location: {
			type: String,
			required: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Post", siteSchema, "Post");
