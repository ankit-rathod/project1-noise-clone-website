const express = require("express");
const router = express.Router();
const CustomerDetail = require("../models/CustomerDetail");

router.get("/", async (req, res) => {
  try {
    const customerDetail = await CustomerDetail.find();
    res.status(200).json({
      data: customerDetail,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const customerDetail = await CustomerDetail.findById(req.params.id);

    res.status(200).json({
      data: customerDetail,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const customerDetail = new CustomerDetail(req.body);
    const newcustomerDetail = await customerDetail.save();

    res.status(200).json({
      data: newcustomerDetail,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const customerDetail = await CustomerDetail.findById(req.params.id);

    if (!customerDetail) {
      return res.status(400).json({ message: "CustomerDetail does not exist" });
    }
    customerDetail.customerDetailname = req.body.customerDetailname || customerDetail.customerDetailname;
    customerDetail.number = req.body.number || customerDetail.number;
    customerDetail.customerDetailtype = req.body.customerDetailtype || customerDetail.customerDetailtype;
  
    const updatedCustomerDetail = await customerDetail.save();

    res.status(200).json({
      data: updatedCustomerDetail,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await CustomerDetail.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "CustomerDetail is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
