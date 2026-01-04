import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Get Hello World");
});

app.post("/", (req, res) => {
  res.send("Post Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
