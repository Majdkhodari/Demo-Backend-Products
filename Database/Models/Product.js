const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  slug: String,
  image: String,
  descrition: String,
  quantity: Number,
  price: Number,
});

module.exports = ProductSchema;
