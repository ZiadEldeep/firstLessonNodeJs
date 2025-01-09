const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.get('/register',(req,res)=>{
    res.send("hello")
})
app.listen(3000, () => {
  console.log("hello in 3000");
});
