const express = require("express"); //imports express
const app = express();

let count = 0;

app.get("/data", (req, res) => {
  res.json(count);
});

app.get("/add", (req,res) =>{
  count++;
  res.json(count);
})

app.get("/minus", (req,res) =>{
  count--;
  res.json(count);
})

app.listen(8000, () => {
  console.log("Server started on port 8000");
});


