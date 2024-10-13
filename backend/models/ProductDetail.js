const mongoose = require("mongoose")

const ProductDetailSchema = mongoose.Schema({
   title:String,
  discount:Number,
   originalPrice:Number,
   images:Array,
   category:String



    

    })

module.exports = mongoose.model("ProductDetail", ProductDetailSchema);