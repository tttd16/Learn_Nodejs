const express = require("express");
const router = express.Router();
const { protect, isAdmin } = require("../middleware/authMiddleware");

const {
  getAllProduct,
  createProduct,
  getProductById,
  deleteProductById,
} = require("../controller/productController");

router.get("/", getAllProduct);

router.get("/:id", getProductById);

router.delete("/:id", protect, isAdmin, deleteProductById);

router.post("/", isAdmin, createProduct);

module.exports = router;
