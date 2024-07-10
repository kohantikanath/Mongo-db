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
