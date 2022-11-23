const mongoose = require("mongoose");

const areaSchema = mongoose.Schema({
    geosite_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Geosite",
      required: true
    },
    area_category: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    banner_img: {
      type: String,
      required: false
    },
    thumbnail_img: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    ticket_price: {
      type: Number,
      required: false
    },
    operational_time: {
      type: String,
      required: false
    },
    location: {
      type: String,
      required: false
    },
    coordinate: {
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

  module.exports = mongoose.model("Geoarea", areaSchema, "Geoarea");