const productModel = require("../models/product")


exports.createProducts = async (req, res) => {
  const product = productModel.create({
    product_name: req.body.product_name,
    product_price: req.body.product_price,
    isInStock: req.body.isInStock,
    category: req.body.category,
  });
  console.log(product);

  return res.status(201).json({ message: "Product Created" });
};


exports.getallProducts = async (req, res) => {
  const allProducts = await productModel.find({});

  return res.json(allProducts);
};

exports.getById = async (req, res) => {
  const product = await productModel.findById(req.params.id);

  return res.json(product);
};

exports.updateProduct = async (req, res) => {
  const updatedProduct = await productModel.findByIdAndUpdate(
    req.params.id,
    res.body
  );
  return res.json(updatedProduct);
};

exports.deletedProduct = async (req, res) => {
  const deletedProduct = await productModel.findByIdAndDelete(
    req.params.id,
    res.body
  );
  return res.json(deletedProduct);
};