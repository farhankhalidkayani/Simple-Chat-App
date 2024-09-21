const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chatApp");
}

const app = express();

app.set(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Working");
});

app.listen(3000);
