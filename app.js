const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const Chat = require("./models/chat");

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

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("welcome.ejs");
});
app.get("/chats", async (req, res) => {
  const chats = await Chat.find();
  res.render("chats.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("newForm.ejs");
});

app.get("/chats/:id/edit", async (req, res) => {
  const { id } = req.params;
  const chat = await Chat.findById(id);
  res.render("editForm.ejs", { chat });
});

app.post("/chats", async (req, res) => {
  const { from, to, message } = req.body;
  const chat1 = new Chat({ from, to, message, createdAt: new Date() });
  await chat1.save();
  res.redirect("/chats");
});

app.get("/chats/:id", async (req, res) => {
  const { id } = req.params;
  const chat = await Chat.findById(id);
  res.render("chat.ejs", { chat });
});

app.put("/chats/:id", async (req, res) => {
  const { id } = req.params;
  const { from, to, message } = req.body;
  await Chat.findByIdAndUpdate(id, {
    from: from,
    to: to,
    message: message,
    createdAt: new Date(),
  });
  res.redirect("/chats");
});

app.delete("/chats/:id", async (req, res) => {
  const { id } = req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});

app.listen(3000);
