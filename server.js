const express = require("express");
const products = require("./routes/products.js");

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("<h1>Welcome to the main page</h1>"));

app.use("/products", products);

const port = 6969;
app.listen(port, () => console.log(`Listening on port ${port}...lol`));
