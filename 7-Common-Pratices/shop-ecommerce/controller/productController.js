const asyncHandler = require("express-async-handler");
const productModel = require("../models/productModel");

const getAllProduct = asyncHandler(async (req, res) => {
  const product = await productModel.find({});
  res.json(product);
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await productModel.findById(req.params.id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404);
    throw new Error("Khong co san pham nay!");
  }
});

const deleteProductById = asyncHandler(async (req, res) => {
  const product = await productModel.findByIdAndDelete(req.params.id);
  if (product) {
    res.status(200).send("xoa thanh cong san pham");
  } else {
    res.status(404);
    throw new Error("Xoa san pham that bai");
  }
});

const createProduct = asyncHandler(async (req, res) => {
  const newProduct = await productModel.create({
    user,
    name,
    image,
    brand,
    category,
    description,
    reviews,
    rating,
    numReviews,
    price,
    countlnStock,
  });
  console.log(newProduct);

  if (newProduct) {
    res.status(200).json({
      _id: newProduct._id,
      name: newProduct.name,
      image: newProduct.image,
      brand: newProduct.brand,
      category: newProduct.category,
      description: newProduct.description,
      reviews: newProduct.reviews,
      numReviews: newProduct.numReviews,
      price: newProduct.price,
      countlnStock: newProduct.countlnStock,
    });
    newProduct.save();
  } else {
    res.status(400);
    throw new Error("loi roi");
  }
});

module.exports = {
  getAllProduct,
  createProduct,
  getProductById,
  deleteProductById,
};
