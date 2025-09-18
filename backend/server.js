const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid"); // สำหรับสร้าง id

const app = express();
app.use(cors());
app.use(bodyParser.json());

let products = [];

// GET: ดึงสินค้าทั้งหมด
app.get("/api/products", (req, res) => {
  res.json(products);
});

// POST: เพิ่มสินค้า
app.post("/api/products", (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: uuidv4(), name, price };
  products.push(newProduct);
  res.json(newProduct);
});

// DELETE: ลบสินค้า
app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  products = products.filter((product) => product.id !== id);
  res.status(200).send();
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
