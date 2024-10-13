const mongoose = require("mongoose")

const CustomerDetailSchema = mongoose.Schema({
    fullName:String,
    phone : Number,
    email : String,
    password:String
    

    })

module.exports = mongoose.model("CustomerDetail", CustomerDetailSchema);