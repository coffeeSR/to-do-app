const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
const PORT = 7000;
const indexRouter = require('./routes');

mongoose.connect("mongodb://127.0.0.1:27017/toDoApp").then(()=>{
    console.log("database connected")
})

app.use(cors());
app.use(express.json());
app.use("/", indexRouter);

app.listen(7000,()=>{
    console.log("Server running on port 7000");
})