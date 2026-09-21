const express = require("express");
const app = express();

app.use("/", (req, res) => {
    console.log("This is a middleware function");
    res.send("this is the home page");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});