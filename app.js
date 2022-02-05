const express = require("express");
const app = express();
const connectDb = require("./Database/dataBase");
const PORT = 8080;
const products = require("./data");
const homeRouter = require("./Routers/home.router");
const productsRouter = require("./Routers/products.router");

app.use(express.urlencoded({ extended: true }));
app.use("/", homeRouter);
app.use("/products", productsRouter);

app.listen(PORT, () => {
  console.log("The application is running on localhost:8080");
});
