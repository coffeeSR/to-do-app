const express = require('express');

const app = express();
const indexRouter = require('./routes');


app.use("/", indexRouter);

app.listen(7000,()=>{
    console.log("Server running on port 7000");
})