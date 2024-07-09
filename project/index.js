const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("Failed", err);
  });

//produxtSchema

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_price: {
    type: String,
    required: true,
  },
  isInStock: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const productModel = mongoose.model("products", productSchema);

//create
app.post("/api/products", async (req, res) => {
  const product = productModel.create({
    product_name: req.body.product_name,
    product_price: req.body.product_price,
    isInStock: req.body.isInStock,
    category: req.body.category,
  });
  console.log(product);

  return res.status(201).json({ message: "Product Created" });
});

app.get("/api/products", async (req, res) => {
  const allProducts = await productModel.find({});

  return res.json(allProducts);
});

//Get product by id
app.get("/api/products/:id", async (req, res) => {
  const product = await productModel.findById(req.params.id);

  return res.json(product);
});

//Update product
app.put("/api/products/:id", async (req, res) => {
  const updatedProduct = await productModel.findByIdAndUpdate(
    req.params.id,
    res.body
  );
  return res.json(updatedProduct);
});

//Delete a Resource
app.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await productModel.findByIdAndDelete(
    req.params.id,
    res.body
  );
  return res.json(deletedProduct);
});

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
