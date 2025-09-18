import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // โหลดรายการสินค้าเมื่อเปิดหน้า
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const addProduct = async () => {
    if (!name.trim() || !price) {
      alert("กรุณากรอกชื่อและราคาสินค้า");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/products", {
        name,
        price,
      });
      setProducts([...products, res.data]);
      setName("");
      setPrice("");
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: "0 auto" }}>
      <h1>Product Management</h1>

      <div style={{ marginBottom: 10 }}>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: 10, padding: 5, width: "60%" }}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ marginRight: 10, padding: 5, width: "20%" }}
        />
        <button onClick={addProduct} style={{ padding: "6px 12px" }}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {products.map((p) => (
          <li key={p.id} style={{ marginBottom: 10 }}>
            <strong>{p.name}</strong> - ${p.price}
            <button
              onClick={() => deleteProduct(p.id)}
              style={{
                marginLeft: 10,
                padding: "4px 8px",
                backgroundColor: "red",
                color: "#fff",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
