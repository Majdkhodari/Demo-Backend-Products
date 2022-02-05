const express = require("express");

const {
  fetchProduct,
  createProduct,
  deleteProduct,
} = require("../Controllers/product.controller");

const router = express.Router();

router.get("/", fetchProduct);
router.post("/", createProduct);
router.delete("/:productId", deleteProduct);

module.exports = router;
