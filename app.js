const express = require("express");
const app = express();
const mysql = require("mysql2");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const q = mysql.createConnection({
  host: "localhost",
  database: "nodedb",
  user: "root",
  password: "",
});
app.get("/select", (req, res) => {
  q.execute(`select * from products`, (err, result) => {
    res.json({ message: "success", products: result });
  });
});
app.post("/addProduct", (req, res) => {
  const { name, price, description } = req.body;
  q.execute(
    `INSERT INTO products (name,price,description) VALUES ('${name}',${price},'${description}')`
  );

  res.json({ message: "success" });
});
app.delete("/delete", (req, res) => {
  q.execute(`delete from products where id='${req.body.id}'`);
  res.json({ message: "success" });
});
app.listen(3999, () => {
  console.log("hello in 3999");
});
