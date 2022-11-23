const mongoose = require("mongoose");

const siteSchema = mongoose.Schema({
  site_category: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  location: {
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

module.exports = mongoose.model("Geosite", siteSchema, "Geosite");
