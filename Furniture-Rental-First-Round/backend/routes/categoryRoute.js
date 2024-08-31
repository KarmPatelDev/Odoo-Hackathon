import express from "express";
import CategoryModel from "../models/categoryData_Model.js";

const router = express.Router();


router.get("/:category", async (req, res) => {
  try {
    let category = req.params.category;
    console.log(category);
    let CategoryData = await CategoryModel.find({ category });
    res.send(CategoryData);
  } catch (err) {
    res.send(err);
  }
});

export default router;
