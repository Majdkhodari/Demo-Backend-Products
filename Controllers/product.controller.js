const express = require("express");
let productsData = require("../data");
let products = productsData;
const ProductSchema = require("../Database/Models/Product");

exports.fetchProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
productsSchema.find(products);

exports.createProduct = (req, res) => {
  const product = req.body;
  products = [...products, product];
  res.json(products);
};

exports.deleteProduct = (req, res) => {
  try {
    const { productId } = req.params;
    const product = products.find((product) => +product.id === +productId);
    if (product) {
      products = products.filter((product) => productId !== 1);
      res.status(204).end();
    } else {
      res.status(404).hson({ msg: `product ${productId} doesn't exist` });
    }
  } catch {
    console.error();
  }
};
