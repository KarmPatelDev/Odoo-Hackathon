import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  tenure: {
    type: Number,
  },
},{versionKey:false});

export default mongoose.model("Carts", cartSchema);
