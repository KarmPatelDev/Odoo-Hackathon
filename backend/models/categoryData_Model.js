import mongoose from "mongoose";

let CategorySchema = mongoose.Schema({
  image: String,
  name: String,
  category: String,
  sub_category: String,
});

export default mongoose.model("product_categories", CategorySchema);
