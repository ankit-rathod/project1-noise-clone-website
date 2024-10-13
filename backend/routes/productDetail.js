const express = require("express");
const router = express.Router();
const ProductDetail = require("../models/ProductDetail");

router.get("/", async (req, res) => {
  try {
    const productDetail = await ProductDetail.find();
    res.status(200).json({
      data: productDetail,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const productDetail = await ProductDetail.findById(req.params.id);

    res.status(200).json({
      data: productDetail,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const productDetail = new ProductDetail(req.body);
    const newproductDetail = await productDetail.save();

    res.status(200).json({
      data: newproductDetail,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const productDetail = await ProductDetail.findById(req.params.id);

    if (!productDetail) {
      return res.status(400).json({ message: "ProductDetail does not exist" });
    }
    productDetail.productDetailname = req.body.productDetailname || productDetail.productDetailname;
    productDetail.number = req.body.number || productDetail.number;
    productDetail.productDetailtype = req.body.productDetailtype || productDetail.productDetailtype;
  
    const updatedProductDetail = await productDetail.save();

    res.status(200).json({
      data: updatedProductDetail,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await ProductDetail.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "ProductDetail is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
