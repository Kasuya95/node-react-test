
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); 
app.use(express.json());

const PORT = 3000;


app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
