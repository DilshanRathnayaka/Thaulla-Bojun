require("dotenv").config();

const ProductData = require("./data/Product");
const Product = require("./models/product");
const connectDB = require("./config/db");

connectDB();

const importData = async ()=>{
    try {
        await Product.deleteMany({});
        await Product.insertMany(ProductData);

        console.log("Data Import Success !");
        process.exit();

    } catch (error) {
        console.error("Error with importing data");
        process.exit(1);
    }
}

importData();