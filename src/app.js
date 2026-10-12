const express = require("express");
const app = express();




// app.use("/", (req, res) => {

//     res.send("this is the home page");
// });


// app.use("/", (req, res) => {

//     res.send("hello ")
// })
app.get("/a*c", (req, res) => {
    console.log("a*c")
    res.send({
        firstName: "sriram",
        age: 27
    })
})

app.post("/user", (req, res) => {
    console.log("data fetched successfully")
    res.send("data is send ")
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});