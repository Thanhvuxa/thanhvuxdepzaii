const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/products",productRoute);



app.get('/',(req,res)=>{
    res.send("Hello form node api sever updated");

});



mongoose.connect("mongodb+srv://thanhgdeptrai:ogJj3K5wAfAascbE@backend.st9j4.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backend")
.then(()=>{
    console.log("Connected to database!");
    app.listen(3000,()=>{

        console.log('Server is running on port 3000');
    });
})
.catch(()=>{
    console.log("Connection failed!")
});