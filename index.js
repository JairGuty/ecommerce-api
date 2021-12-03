const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/order");



mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('DB connection Successfull'))
    .catch((err) => {
        console.log(err);
    });

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

    
app.listen(process.env.PORT || 5000, () => {
    console.log(`Backend server is running in port ${process.env.PORT} `);
})


 
