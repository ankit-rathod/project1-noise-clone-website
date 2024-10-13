const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./config.env" });
const app = express();
connectDB();

app.use(cors());
app.use(express.json({ extended: false, limit: "50mb" }));
// api names---
//this is to open the file of any source the quick brown fox jumps over an= lazy dog 

// /the quick brown fox jumps over a lazy dog the quick brown fox jumps over a lazu=y dog the
// the quick bron  
//example => app.use("/api/todo", require("./routes/todo"));

app.use("/api/customerDetail", require("./routes/customerDetail"));
app.use("/api/productDetail", require("./routes/productDetail"));


const PORT = process.env.PORT || 5001;              
app.listen(PORT, () => console.log(`Server running at ${PORT}`));