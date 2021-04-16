require('dotenv').config();
const express = require('express');
const app = express();
const PORT =process.env.PORT || 5000;
const productRoutes = require('./routes/productRoutes')
const connectDB = require('./config/db')




//     ************   //
app.use('/api/products',productRoutes)
app.use(express.json());



connectDB();

app.listen(PORT,()=> console.log(`Server is running on Port ${PORT}`))